// =====================================================================
// Efeitos sonoros sintéticos via Web Audio API (sem arquivos .mp3)
// =====================================================================

let ctx: AudioContext | null = null

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!Ctor) return null
  if (!ctx) ctx = new Ctor()
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

interface Tone {
  freq: number
  start: number
  duration: number
  type?: OscillatorType
  gain?: number
  slideTo?: number
}

function playTones(tones: Tone[]) {
  const ac = getCtx()
  if (!ac) return
  const now = ac.currentTime
  const master = ac.createGain()
  master.gain.value = 0.25
  master.connect(ac.destination)

  for (const t of tones) {
    const osc = ac.createOscillator()
    const g = ac.createGain()
    osc.type = t.type ?? 'sine'
    osc.frequency.setValueAtTime(t.freq, now + t.start)
    if (t.slideTo) osc.frequency.exponentialRampToValueAtTime(t.slideTo, now + t.start + t.duration)
    const peak = t.gain ?? 0.8
    g.gain.setValueAtTime(0.0001, now + t.start)
    g.gain.exponentialRampToValueAtTime(peak, now + t.start + 0.02)
    g.gain.exponentialRampToValueAtTime(0.0001, now + t.start + t.duration)
    osc.connect(g).connect(master)
    osc.start(now + t.start)
    osc.stop(now + t.start + t.duration + 0.05)
  }
}

export const sfx = {
  /** "Ding-ding" ascendente de acerto. */
  correct() {
    playTones([
      { freq: 880, start: 0, duration: 0.12, type: 'triangle' },
      { freq: 1318.5, start: 0.1, duration: 0.25, type: 'triangle' },
    ])
  },
  /** "Buzz" grave de erro. */
  wrong() {
    playTones([
      { freq: 220, start: 0, duration: 0.18, type: 'square', gain: 0.35, slideTo: 180 },
      { freq: 160, start: 0.16, duration: 0.25, type: 'square', gain: 0.35, slideTo: 110 },
    ])
  },
  /** Clique leve ao tocar em blocos/opções. */
  tap() {
    playTones([{ freq: 600, start: 0, duration: 0.05, type: 'sine', gain: 0.3 }])
  },
  /** Início de gravação do microfone. */
  micOn() {
    playTones([{ freq: 520, start: 0, duration: 0.08, type: 'sine', gain: 0.4, slideTo: 780 }])
  },
  /** Fanfarra de conclusão de lição. */
  complete() {
    const notes = [523.25, 659.25, 783.99, 1046.5]
    playTones([
      ...notes.map((freq, i) => ({ freq, start: i * 0.12, duration: 0.2, type: 'triangle' as OscillatorType })),
      { freq: 1046.5, start: 0.5, duration: 0.6, type: 'triangle' },
      { freq: 1318.5, start: 0.5, duration: 0.6, type: 'sine', gain: 0.5 },
    ])
  },
}
