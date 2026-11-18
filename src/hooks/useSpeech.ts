import { useCallback, useEffect, useRef, useState } from 'react'

// =====================================================================
// Motor de Voz e Áudio do SpeakQuest
// ---------------------------------------------------------------------
// Arquitetura por "providers": o app só conversa com as interfaces
// TTSProvider / STTProvider. Hoje usamos a Web Speech API nativa
// (gratuita). Para plugar OpenAI Whisper/TTS ou ElevenLabs no futuro,
// basta implementar as interfaces e chamar `configureSpeechProviders`.
// =====================================================================

export interface SpeakOptions {
  rate?: number // 1.0 normal | 0.7 lento (tartaruga)
  lang?: string
}

export interface RecognitionResult {
  /** Melhor transcrição. */
  transcript: string
  /** Alternativas (inclui a melhor) — útil para escolher a mais próxima da frase-alvo. */
  alternatives: string[]
  confidence: number
}

export interface ListenOptions {
  lang?: string
  onInterim?: (text: string) => void
}

export interface TTSProvider {
  readonly name: string
  isSupported(): boolean
  speak(text: string, opts?: SpeakOptions): Promise<void>
  cancel(): void
}

export interface STTProvider {
  readonly name: string
  isSupported(): boolean
  /** Começa a ouvir e resolve com o resultado final (ou rejeita com SpeechError). */
  listen(opts?: ListenOptions): Promise<RecognitionResult>
  /** Encerra a captura e entrega o que já foi reconhecido. */
  stop(): void
  /** Cancela sem resultado. */
  abort(): void
}

export type SpeechErrorCode = 'not-supported' | 'not-allowed' | 'no-speech' | 'network' | 'aborted' | 'unknown'

export class SpeechError extends Error {
  code: SpeechErrorCode
  constructor(code: SpeechErrorCode, message?: string) {
    super(message ?? code)
    this.code = code
  }
}

export const SPEECH_ERROR_MESSAGES: Record<SpeechErrorCode, string> = {
  'not-supported': 'Seu navegador não suporta reconhecimento de voz. Use o Chrome ou Edge.',
  'not-allowed': 'Permita o acesso ao microfone nas configurações do navegador.',
  'no-speech': 'Não ouvi nada. Toque no microfone e fale novamente.',
  network: 'O reconhecimento de voz precisa de conexão com a internet.',
  aborted: 'Gravação cancelada.',
  unknown: 'Algo deu errado com o microfone. Tente novamente.',
}

// ---------------------------------------------------------------------
// Provider nativo: SpeechSynthesis (TTS)
// ---------------------------------------------------------------------

const PREFERRED_VOICES = ['Google US English', 'Microsoft Aria', 'Microsoft Jenny', 'Samantha', 'Microsoft Zira', 'Alex']

function pickVoice(lang: string): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices()
  const langVoices = voices.filter((v) => v.lang.replace('_', '-').toLowerCase().startsWith(lang.toLowerCase()))
  for (const name of PREFERRED_VOICES) {
    const v = langVoices.find((voice) => voice.name.includes(name))
    if (v) return v
  }
  return langVoices[0] ?? voices.find((v) => v.lang.toLowerCase().startsWith('en'))
}

export const nativeTTS: TTSProvider = {
  name: 'web-speech-synthesis',
  isSupported: () => typeof window !== 'undefined' && 'speechSynthesis' in window,
  speak(text, opts = {}) {
    return new Promise((resolve) => {
      if (!this.isSupported()) return resolve()
      const synth = window.speechSynthesis
      synth.cancel()
      const lang = opts.lang ?? 'en-US'
      const utter = new SpeechSynthesisUtterance(text)
      utter.lang = lang
      utter.rate = opts.rate ?? 1
      utter.pitch = 1
      const voice = pickVoice(lang)
      if (voice) utter.voice = voice
      utter.onend = () => resolve()
      utter.onerror = () => resolve()
      synth.speak(utter)
    })
  },
  cancel() {
    if (this.isSupported()) window.speechSynthesis.cancel()
  },
}

// Pré-carrega a lista de vozes (Chrome carrega de forma assíncrona)
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.getVoices()
  window.speechSynthesis.addEventListener?.('voiceschanged', () => window.speechSynthesis.getVoices())
}

// ---------------------------------------------------------------------
// Provider nativo: SpeechRecognition (STT)
// ---------------------------------------------------------------------

// Tipagem mínima local (a API ainda não faz parte de todas as libs DOM do TS)
interface NativeRecognitionAlternative {
  transcript: string
  confidence: number
}
interface NativeRecognitionEvent {
  resultIndex: number
  results: ArrayLike<ArrayLike<NativeRecognitionAlternative> & { isFinal: boolean }>
}
interface NativeRecognition {
  lang: string
  continuous: boolean
  interimResults: boolean
  maxAlternatives: number
  start(): void
  stop(): void
  abort(): void
  onresult: ((e: NativeRecognitionEvent) => void) | null
  onerror: ((e: { error: string }) => void) | null
  onend: (() => void) | null
}
type NativeRecognitionCtor = new () => NativeRecognition

function getRecognitionCtor(): NativeRecognitionCtor | undefined {
  if (typeof window === 'undefined') return undefined
  const w = window as unknown as { SpeechRecognition?: NativeRecognitionCtor; webkitSpeechRecognition?: NativeRecognitionCtor }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition
}

function createNativeSTT(): STTProvider {
  let current: NativeRecognition | null = null
  return {
    name: 'web-speech-recognition',
    isSupported: () => !!getRecognitionCtor(),
    listen(opts = {}) {
      return new Promise<RecognitionResult>((resolve, reject) => {
        const Ctor = getRecognitionCtor()
        if (!Ctor) return reject(new SpeechError('not-supported'))
        current?.abort()

        const rec = new Ctor()
        current = rec
        rec.lang = opts.lang ?? 'en-US'
        rec.continuous = false
        rec.interimResults = true
        rec.maxAlternatives = 5

        let finalAlternatives: NativeRecognitionAlternative[] = []
        let interimText = ''
        let errorCode: SpeechErrorCode | null = null

        rec.onresult = (e) => {
          let interim = ''
          for (let i = e.resultIndex; i < e.results.length; i++) {
            const result = e.results[i]
            if (result.isFinal) {
              finalAlternatives = Array.from({ length: result.length }, (_, k) => result[k])
            } else {
              interim += result[0].transcript
            }
          }
          interimText = interim || interimText
          opts.onInterim?.(finalAlternatives[0]?.transcript ?? interim)
        }
        rec.onerror = (e) => {
          const map: Record<string, SpeechErrorCode> = {
            'not-allowed': 'not-allowed',
            'service-not-allowed': 'not-allowed',
            'no-speech': 'no-speech',
            network: 'network',
            aborted: 'aborted',
          }
          errorCode = map[e.error] ?? 'unknown'
        }
        rec.onend = () => {
          if (current === rec) current = null
          if (finalAlternatives.length > 0) {
            resolve({
              transcript: finalAlternatives[0].transcript.trim(),
              alternatives: finalAlternatives.map((a) => a.transcript.trim()),
              confidence: finalAlternatives[0].confidence,
            })
          } else if (interimText.trim()) {
            // Usuário soltou o botão antes do resultado "final": usa o parcial.
            resolve({ transcript: interimText.trim(), alternatives: [interimText.trim()], confidence: 0.5 })
          } else {
            reject(new SpeechError(errorCode ?? 'no-speech'))
          }
        }

        try {
          rec.start()
        } catch {
          reject(new SpeechError('unknown'))
        }
      })
    },
    stop() {
      current?.stop()
    },
    abort() {
      current?.abort()
      current = null
    },
  }
}

export const nativeSTT: STTProvider = createNativeSTT()

// ---------------------------------------------------------------------
// Registro de providers (ponto de extensão para APIs externas)
// ---------------------------------------------------------------------

let activeTTS: TTSProvider = nativeTTS
let activeSTT: STTProvider = nativeSTT

/**
 * Troca os providers globais. Exemplo futuro:
 *   configureSpeechProviders({ tts: createElevenLabsTTS(apiKey), stt: createWhisperSTT(apiKey) })
 */
export function configureSpeechProviders(p: { tts?: TTSProvider; stt?: STTProvider }) {
  if (p.tts) activeTTS = p.tts
  if (p.stt) activeSTT = p.stt
}

// ---------------------------------------------------------------------
// Hook React
// ---------------------------------------------------------------------

export function useSpeech(lang = 'en-US') {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [interim, setInterim] = useState('')
  const [error, setError] = useState<SpeechErrorCode | null>(null)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
      activeTTS.cancel()
      activeSTT.abort()
    }
  }, [])

  const speak = useCallback(
    async (text: string, rate = 1) => {
      activeSTT.abort()
      setIsSpeaking(true)
      try {
        await activeTTS.speak(text, { rate, lang })
      } finally {
        if (mounted.current) setIsSpeaking(false)
      }
    },
    [lang],
  )

  const listen = useCallback(async (): Promise<RecognitionResult | null> => {
    activeTTS.cancel()
    setIsSpeaking(false)
    setError(null)
    setInterim('')
    setIsListening(true)
    try {
      const result = await activeSTT.listen({ lang, onInterim: (t) => mounted.current && setInterim(t) })
      return result
    } catch (err) {
      const code = err instanceof SpeechError ? err.code : 'unknown'
      if (mounted.current && code !== 'aborted') setError(code)
      return null
    } finally {
      if (mounted.current) setIsListening(false)
    }
  }, [lang])

  const stopListening = useCallback(() => activeSTT.stop(), [])
  const cancel = useCallback(() => {
    activeTTS.cancel()
    activeSTT.abort()
  }, [])

  return {
    speak,
    listen,
    stopListening,
    cancel,
    isSpeaking,
    isListening,
    interim,
    error,
    errorMessage: error ? SPEECH_ERROR_MESSAGES[error] : null,
    clearError: () => setError(null),
    ttsSupported: activeTTS.isSupported(),
    sttSupported: activeSTT.isSupported(),
  }
}
