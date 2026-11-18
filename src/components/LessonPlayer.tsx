import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, CheckCircle2, XCircle, SkipForward } from 'lucide-react'
import type { Exercise, Lesson } from '../types'
import { useGameStore } from '../store/useGameStore'
import { sfx } from '../lib/sounds'
import { ListeningExercise } from './exercises/ListeningExercise'
import { SpeakingExercise } from './exercises/SpeakingExercise'
import { RoleplayExercise } from './exercises/RoleplayExercise'
import type { AnswerResult } from './exercises/shared'
import { LessonComplete } from './LessonComplete'
import { OutOfHearts } from './OutOfHearts'

const BASE_XP = 10
const PERFECT_BONUS = 5

const TYPE_LABEL: Record<Exercise['type'], string> = {
  listening: '🎧 Listening',
  speaking: '🗣️ Speaking',
  roleplay: '💬 Roleplay',
}

interface Props {
  lesson: Lesson
  onExit: () => void
}

/** Motor de lição: fila de exercícios, progresso, vidas e feedback. */
export function LessonPlayer({ lesson, onExit }: Props) {
  const game = useGameStore()
  const [queue, setQueue] = useState<Exercise[]>(lesson.exercises)
  const [index, setIndex] = useState(0)
  const [result, setResult] = useState<AnswerResult | null>(null)
  const [solved, setSolved] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [finished, setFinished] = useState<{ xp: number; accuracy: number; seconds: number } | null>(null)
  const [confirmExit, setConfirmExit] = useState(false)
  const retried = useRef(new Set<string>())
  const startedAt = useRef(Date.now())

  const total = lesson.exercises.length
  const current = queue[index]
  const progress = finished ? 1 : solved / total

  const handleAnswer = useCallback(
    (r: AnswerResult) => {
      if (result) return
      setResult(r)
      if (r.status === 'correct') {
        sfx.correct()
        setSolved((s) => s + 1)
      } else if (r.status === 'skipped') {
        setSolved((s) => s + 1)
      } else {
        sfx.wrong()
        setMistakes((m) => m + 1)
        game.loseHeart()
      }
    },
    [result, game],
  )

  const next = useCallback(() => {
    if (!result) return
    let nextQueue = queue
    // Exercícios errados voltam para o fim da fila (uma vez), como no Duolingo
    if (result.status === 'wrong' && !retried.current.has(current.id)) {
      retried.current.add(current.id)
      nextQueue = [...queue, current]
      setQueue(nextQueue)
    } else if (result.status === 'wrong') {
      setSolved((s) => s + 1) // segunda falha: segue em frente
    }

    const nextIndex = index + 1
    if (nextIndex >= nextQueue.length) {
      const xp = BASE_XP + (mistakes === 0 ? PERFECT_BONUS : 0)
      const accuracy = Math.max(0, Math.round(((total - mistakes) / total) * 100))
      const seconds = Math.round((Date.now() - startedAt.current) / 1000)
      game.completeLesson(lesson.id, xp)
      sfx.complete()
      setFinished({ xp, accuracy, seconds })
    } else {
      setIndex(nextIndex)
    }
    setResult(null)
  }, [result, queue, current, index, mistakes, total, game, lesson.id])

  // Enter = Continuar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && result) next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [result, next])

  if (finished) {
    return <LessonComplete lesson={lesson} {...finished} onContinue={onExit} />
  }

  if (game.hearts <= 0 && !result) {
    return <OutOfHearts onExit={onExit} />
  }

  return (
    <div className="flex min-h-full flex-col">
      {/* Cabeçalho: sair, progresso, vidas */}
      <div className="mx-auto flex w-full max-w-2xl items-center gap-4 px-4 pt-6">
        <button type="button" onClick={() => setConfirmExit(true)} aria-label="Sair da lição" className="text-duo-gray-dark hover:text-duo-text">
          <X className="h-7 w-7" strokeWidth={3} />
        </button>
        <div className="h-4 flex-1 overflow-hidden rounded-full bg-duo-gray">
          <motion.div
            className="relative h-full rounded-full bg-duo-green"
            initial={false}
            animate={{ width: `${Math.max(progress * 100, 2)}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <span className="absolute inset-x-2 top-1 h-1 rounded-full bg-white/30" />
          </motion.div>
        </div>
        <motion.div key={game.hearts} initial={{ scale: 1.5 }} animate={{ scale: 1 }} className="flex items-center gap-1">
          <Heart className="h-6 w-6 fill-duo-red text-duo-red" />
          <span className="text-lg font-extrabold text-duo-red">{game.hearts}</span>
        </motion.div>
      </div>

      {/* Exercício atual */}
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 pb-48 pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${index}-${current.id}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
          >
            <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-duo-purple">
              {TYPE_LABEL[current.type]}
              {retried.current.has(current.id) && index >= total && (
                <span className="ml-2 text-duo-orange">• Erro anterior</span>
              )}
            </p>
            {current.type === 'listening' && (
              <ListeningExercise exercise={current} onAnswer={handleAnswer} locked={!!result} />
            )}
            {current.type === 'speaking' && (
              <SpeakingExercise exercise={current} onAnswer={handleAnswer} locked={!!result} />
            )}
            {current.type === 'roleplay' && (
              <RoleplayExercise exercise={current} onAnswer={handleAnswer} locked={!!result} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Painel de feedback */}
      <AnimatePresence>
        {result && <FeedbackSheet result={result} onContinue={next} />}
      </AnimatePresence>

      {/* Confirmação de saída */}
      <AnimatePresence>
        {confirmExit && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setConfirmExit(false)}
          >
            <motion.div
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              exit={{ y: 80 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-t-3xl bg-white p-6 text-center sm:rounded-3xl"
            >
              <p className="text-5xl">😢</p>
              <h3 className="mt-3 text-xl font-extrabold">Espere, não vá embora!</h3>
              <p className="mt-1 text-duo-gray-dark">Se sair agora, vai perder o progresso desta lição.</p>
              <button type="button" onClick={() => setConfirmExit(false)} className="btn-blue mt-6 w-full py-3.5">
                Continuar aprendendo
              </button>
              <button type="button" onClick={onExit} className="mt-3 w-full py-3 font-extrabold uppercase text-duo-red">
                Sair da lição
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FeedbackSheet({ result, onContinue }: { result: AnswerResult; onContinue: () => void }) {
  const ok = result.status === 'correct'
  const skipped = result.status === 'skipped'
  const tone = ok ? 'green' : skipped ? 'blue' : 'red'
  const styles = {
    green: { bg: 'bg-[#d7ffb8]', text: 'text-duo-green-dark', btn: 'btn-primary' },
    blue: { bg: 'bg-[#ddf4ff]', text: 'text-duo-blue-dark', btn: 'btn-blue' },
    red: { bg: 'bg-[#ffdfe0]', text: 'text-duo-red-dark', btn: 'btn-danger' },
  }[tone]
  const praise = ['Muito bem!', 'Excelente!', 'Mandou bem!', 'Perfeito!', 'Incrível!']
  const [title] = useState(() => (ok ? praise[Math.floor(Math.random() * praise.length)] : skipped ? 'Sem problemas!' : 'Resposta correta:'))
  const Icon = ok ? CheckCircle2 : skipped ? SkipForward : XCircle

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed inset-x-0 bottom-0 z-40 ${styles.bg} pb-[env(safe-area-inset-bottom)]`}
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:py-7">
        <div className={`flex items-start gap-3 ${styles.text}`}>
          <motion.div initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} className="hidden rounded-full bg-white p-2 sm:block">
            <Icon className="h-10 w-10" />
          </motion.div>
          <div>
            <p className="text-2xl font-extrabold">{title}</p>
            {!ok && result.correctAnswer && <p className="text-lg font-semibold">{result.correctAnswer}</p>}
            {skipped && <p className="text-sm font-semibold opacity-80">Exercício pulado, sem perder vidas.</p>}
            {result.note && <p className="text-sm font-semibold opacity-80">{result.note}</p>}
          </div>
        </div>
        <button type="button" autoFocus onClick={onContinue} className={`${styles.btn} w-full px-10 py-3.5 sm:w-auto`}>
          Continuar
        </button>
      </div>
    </motion.div>
  )
}
