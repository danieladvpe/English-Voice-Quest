import type { ReactNode } from 'react'

export interface AnswerResult {
  status: 'correct' | 'wrong' | 'skipped'
  /** Resposta correta exibida no feedback de erro. */
  correctAnswer?: string
  /** Mensagem extra (ex.: tradução, dica de pronúncia). */
  note?: string
}

export interface ExerciseProps<T> {
  exercise: T
  /** Chamado uma única vez quando o exercício é resolvido. */
  onAnswer: (result: AnswerResult) => void
  /** true depois que a resposta foi enviada (bloqueia interações). */
  locked: boolean
}

/** Rodapé fixo com as ações do exercício (Verificar / Pular). */
export function ExerciseFooter({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-20 border-t-2 border-duo-gray bg-white pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 px-4 py-4 sm:py-6">{children}</div>
    </div>
  )
}

export function ExerciseTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl font-extrabold sm:text-3xl">{children}</h2>
}

/** Fisher-Yates determinístico por seed (estável entre renders). */
export function shuffle<T>(arr: T[], seed: string): T[] {
  let h = 0
  for (const c of seed) h = (Math.imul(31, h) + c.charCodeAt(0)) | 0
  const rand = () => {
    h = (Math.imul(h ^ (h >>> 15), 1 | h) + 0x6d2b79f5) | 0
    return ((h >>> 0) % 10000) / 10000
  }
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
