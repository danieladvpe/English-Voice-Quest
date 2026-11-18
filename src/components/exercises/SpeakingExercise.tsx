import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MicOff } from 'lucide-react'
import type { SpeakingExercise as SpeakingEx } from '../../types'
import { useSpeech } from '../../hooks/useSpeech'
import { compareSpeech, type WordResult } from '../../lib/compare'
import { sfx } from '../../lib/sounds'
import { AudioButtons } from '../AudioButtons'
import { MicButton } from '../MicButton'
import { ExerciseFooter, ExerciseTitle, type ExerciseProps } from './shared'

const MAX_ATTEMPTS = 2

/** Modo Speaking (Pronúncia & Shadowing). */
export function SpeakingExercise({ exercise, onAnswer, locked }: ExerciseProps<SpeakingEx>) {
  const speech = useSpeech()
  const [words, setWords] = useState<WordResult[] | null>(null)
  const [heard, setHeard] = useState('')
  const [attempts, setAttempts] = useState(0)
  const threshold = exercise.passThreshold ?? 0.7

  useEffect(() => {
    const t = setTimeout(() => void speech.speak(exercise.text, 1), 350)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exercise.id])

  const record = async () => {
    sfx.micOn()
    const result = await speech.listen()
    if (!result) return
    // Escolhe a alternativa reconhecida mais próxima da frase-alvo
    const best = result.alternatives
      .map((alt) => ({ alt, ...compareSpeech(exercise.text, alt) }))
      .sort((a, b) => b.score - a.score)[0]
    setWords(best.words)
    setHeard(best.alt)
    const n = attempts + 1
    setAttempts(n)

    if (best.score >= threshold) {
      onAnswer({ status: 'correct', note: `Precisão: ${Math.round(best.score * 100)}%` })
    } else if (n >= MAX_ATTEMPTS) {
      onAnswer({ status: 'wrong', correctAnswer: exercise.text, note: `Você disse: “${best.alt}”` })
    } else {
      sfx.wrong()
    }
  }

  const missed = words?.filter((w) => !w.correct).length ?? 0

  return (
    <div className="flex flex-col gap-8">
      <ExerciseTitle>Fale esta frase</ExerciseTitle>

      <div className="flex items-center gap-4">
        <AudioButtons size="sm" isSpeaking={speech.isSpeaking} onPlay={(rate) => void speech.speak(exercise.text, rate)} />
        <div className="relative flex-1 rounded-2xl border-2 border-duo-gray px-4 py-3">
          <p className="flex flex-wrap gap-x-2 gap-y-1 text-2xl font-bold">
            {(words ?? exercise.text.split(' ').map((display) => ({ display, correct: true }))).map((w, i) => (
              <motion.span
                key={`${i}-${w.display}-${attempts}`}
                initial={words ? { y: -6, opacity: 0 } : false}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
                className={
                  !words
                    ? 'text-duo-text'
                    : w.correct
                      ? 'text-duo-green'
                      : 'text-duo-red underline decoration-wavy decoration-2 underline-offset-4'
                }
              >
                {w.display}
              </motion.span>
            ))}
          </p>
          <p className="mt-1 text-sm font-semibold text-duo-gray-dark">{exercise.translation}</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {words && !locked && missed > 0 && (
          <motion.div
            key={attempts}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl bg-duo-red/10 px-4 py-3 text-center font-bold text-duo-red-dark"
          >
            Quase! Repita as palavras em vermelho. ({attempts}/{MAX_ATTEMPTS})
            {heard && <span className="mt-1 block text-sm font-semibold opacity-80">Ouvi: “{heard}”</span>}
          </motion.div>
        )}
      </AnimatePresence>

      <SpeechArea
        speech={speech}
        locked={locked}
        onStart={record}
        onSkip={() => onAnswer({ status: 'skipped', correctAnswer: exercise.text })}
      />
    </div>
  )
}

/** Área do microfone + mensagens de erro + rodapé "Não posso falar agora". Reutilizada no Roleplay. */
export function SpeechArea({
  speech,
  locked,
  onStart,
  onSkip,
}: {
  speech: ReturnType<typeof useSpeech>
  locked: boolean
  onStart: () => void
  onSkip: () => void
}) {
  return (
    <>
      <div className="flex flex-col items-center gap-4 pb-4">
        {speech.sttSupported ? (
          <MicButton isListening={speech.isListening} disabled={locked} onStart={onStart} onStop={speech.stopListening} />
        ) : (
          <div className="flex flex-col items-center gap-2 rounded-2xl bg-duo-gray/50 p-4 text-center font-semibold text-duo-gray-dark">
            <MicOff className="h-8 w-8" />
            Seu navegador não suporta reconhecimento de voz. Use o Google Chrome ou Microsoft Edge.
          </div>
        )}
        <div className="min-h-[1.75rem] text-center text-lg font-semibold text-duo-blue-dark">
          {speech.isListening && (speech.interim ? `“${speech.interim}”` : '…')}
        </div>
        {speech.errorMessage && <p className="text-center font-bold text-duo-red">{speech.errorMessage}</p>}
      </div>

      <ExerciseFooter>
        <button type="button" disabled={locked} onClick={onSkip} className="btn-ghost w-full px-6 py-3.5 sm:w-auto">
          Não posso falar agora
        </button>
      </ExerciseFooter>
    </>
  )
}
