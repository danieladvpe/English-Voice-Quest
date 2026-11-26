import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Check, Star, Crown, BookOpen, Headphones, Mic, MessageCircle } from 'lucide-react'
import type { Lesson, Unit } from '../types'
import { UNITS } from '../data/lessons'
import { useGameStore, isLessonCompleted, isLessonUnlocked } from '../store/useGameStore'
import { sfx } from '../lib/sounds'

type NodeState = 'locked' | 'available' | 'completed'

const UNIT_THEME: Record<Unit['color'], { bg: string; shadow: string; node: string; nodeShadow: string; text: string }> = {
  green: {
    bg: 'bg-duo-green',
    shadow: 'shadow-[0_4px_0_var(--color-duo-green-dark)]',
    node: 'bg-duo-green',
    nodeShadow: '0 8px 0 var(--color-duo-green-dark)',
    text: 'text-duo-green',
  },
  blue: {
    bg: 'bg-duo-blue',
    shadow: 'shadow-[0_4px_0_var(--color-duo-blue-dark)]',
    node: 'bg-duo-blue',
    nodeShadow: '0 8px 0 var(--color-duo-blue-dark)',
    text: 'text-duo-blue',
  },
  purple: {
    bg: 'bg-duo-purple',
    shadow: 'shadow-[0_4px_0_#a568cc]',
    node: 'bg-duo-purple',
    nodeShadow: '0 8px 0 #a568cc',
    text: 'text-duo-purple',
  },
}

// Deslocamento horizontal em "zigue-zague" (como a trilha do Duolingo)
const OFFSETS = [0, 60, 90, 60, 0, -60, -90, -60]

interface Props {
  onStartLesson: (lessonId: string) => void
}

/** Dashboard de Trilha: mapa vertical de unidades e lições. */
export function PathMap({ onStartLesson }: Props) {
  const game = useGameStore()
  const [openLesson, setOpenLesson] = useState<string | null>(null)

  // Próxima lição a fazer (balão "COMEÇAR")
  const nextLessonId = UNITS.flatMap((u) => (u.comingSoon ? [] : u.lessons)).find(
    (l) => isLessonUnlocked(game, l.id) && !isLessonCompleted(game, l.id),
  )?.id

  return (
    <div className="mx-auto max-w-xl px-4 pb-24 pt-6" onClick={() => setOpenLesson(null)}>
      {UNITS.map((unit) => {
        const theme = UNIT_THEME[unit.color]
        const unitDone = unit.lessons.every((l) => isLessonCompleted(game, l.id))
        return (
          <section key={unit.id} className="mb-12">
            <div className={`${theme.bg} ${theme.shadow} flex items-center justify-between rounded-2xl p-4 text-white`}>
              <div>
                <p className="text-sm font-extrabold uppercase opacity-80">Unidade {unit.number}</p>
                <h2 className="text-xl font-extrabold">{unit.title}</h2>
                <p className="text-sm font-semibold opacity-90">{unit.description}</p>
              </div>
              <BookOpen className="h-8 w-8 shrink-0 opacity-80" />
            </div>
            {unit.comingSoon && (
              <p className="mt-3 text-center text-sm font-extrabold uppercase tracking-wide text-duo-gray-dark">
                🚧 Em breve — conteúdo em produção
              </p>
            )}

            <div className="mt-12 flex flex-col items-center gap-7">
              {unit.lessons.map((lesson, i) => {
                const completed = isLessonCompleted(game, lesson.id)
                const unlocked = !unit.comingSoon && isLessonUnlocked(game, lesson.id)
                const state: NodeState = completed ? 'completed' : unlocked ? 'available' : 'locked'
                return (
                  <PathNode
                    key={lesson.id}
                    lesson={lesson}
                    unit={unit}
                    state={state}
                    offset={OFFSETS[i % OFFSETS.length]}
                    isNext={lesson.id === nextLessonId}
                    isOpen={openLesson === lesson.id}
                    onToggle={() => setOpenLesson((id) => (id === lesson.id ? null : lesson.id))}
                    onStart={() => onStartLesson(lesson.id)}
                  />
                )
              })}
              <div
                title={unitDone ? 'Unidade concluída!' : 'Conclua todas as lições'}
                className={`flex h-16 w-16 items-center justify-center rounded-full ${unitDone ? 'bg-duo-gold' : 'bg-duo-gray'}`}
              >
                <Crown className="h-8 w-8 text-white" />
              </div>
            </div>
          </section>
        )
      })}

      <ResetButton />
    </div>
  )
}

interface NodeProps {
  lesson: Lesson
  unit: Unit
  state: NodeState
  offset: number
  isNext: boolean
  isOpen: boolean
  onToggle: () => void
  onStart: () => void
}

function PathNode({ lesson, unit, state, offset, isNext, isOpen, onToggle, onStart }: NodeProps) {
  const theme = UNIT_THEME[unit.color]
  const Icon = state === 'completed' ? Check : state === 'locked' ? Lock : Star
  const nodeColor = state === 'completed' ? 'bg-duo-gold' : state === 'available' ? theme.node : 'bg-duo-gray'
  const nodeShadow =
    state === 'completed' ? '0 8px 0 var(--color-duo-gold-dark)' : state === 'available' ? theme.nodeShadow : '0 8px 0 #c8c8c8'

  const counts: Partial<Record<string, number>> = {}
  for (const e of lesson.exercises) counts[e.type] = (counts[e.type] ?? 0) + 1

  return (
    <div className="relative" style={{ transform: `translateX(${offset}px)` }} onClick={(e) => e.stopPropagation()}>
      {isNext && !isOpen && (
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className={`absolute -top-14 left-1/2 z-10 -ml-[3.25rem] w-[6.5rem] rounded-xl border-2 border-duo-gray bg-white px-3 py-2 text-center text-sm font-extrabold uppercase ${theme.text}`}
        >
          Começar
          <span className="absolute -bottom-2 left-1/2 -ml-1.5 h-3 w-3 rotate-45 border-b-2 border-r-2 border-duo-gray bg-white" />
        </motion.div>
      )}

      {isNext && (
        <motion.span
          className="absolute -inset-2 rounded-[50%] border-4 border-duo-gray"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        />
      )}

      <motion.button
        type="button"
        aria-label={`${lesson.title} (${state === 'locked' ? 'bloqueada' : state === 'completed' ? 'concluída' : 'disponível'})`}
        onClick={() => {
          sfx.tap()
          onToggle()
        }}
        whileTap={{ y: 6, boxShadow: '0 2px 0 rgba(0,0,0,0.15)' }}
        style={{ boxShadow: nodeShadow }}
        className={`relative flex h-[70px] w-[76px] items-center justify-center rounded-[50%] ${nodeColor}`}
      >
        <Icon
          className={`h-8 w-8 ${state === 'locked' ? 'text-duo-gray-dark' : 'text-white'} ${state === 'available' ? 'fill-white' : ''}`}
          strokeWidth={3}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            className={`absolute left-1/2 top-full z-20 -ml-36 mt-5 w-72 rounded-2xl p-4 text-left ${
              state === 'locked' ? 'border-2 border-duo-gray bg-gray-50' : `${theme.bg} text-white`
            }`}
          >
            <h3 className="text-lg font-extrabold">{lesson.title}</h3>
            <p className={`text-sm font-semibold ${state === 'locked' ? 'text-duo-gray-dark' : 'opacity-90'}`}>
              {state === 'locked'
                ? unit.comingSoon
                  ? 'Esta unidade está em produção. Volte em breve!'
                  : 'Complete as lições anteriores para desbloquear.'
                : lesson.description}
            </p>
            {state !== 'locked' && (
              <>
                <div className="mt-2 flex gap-3 text-xs font-bold opacity-90">
                  {counts.listening && (
                    <span className="flex items-center gap-1">
                      <Headphones className="h-3.5 w-3.5" />
                      {counts.listening}
                    </span>
                  )}
                  {counts.speaking && (
                    <span className="flex items-center gap-1">
                      <Mic className="h-3.5 w-3.5" />
                      {counts.speaking}
                    </span>
                  )}
                  {counts.roleplay && (
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3.5 w-3.5" />
                      {counts.roleplay}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onStart}
                  className={`btn-3d mt-3 w-full bg-white py-3 ${theme.text} shadow-[0_4px_0_rgba(0,0,0,0.15)] active:shadow-none`}
                >
                  {state === 'completed' ? 'Praticar +10 XP' : 'Começar +10 XP'}
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ResetButton() {
  const game = useGameStore()
  return (
    <div className="text-center">
      <button
        type="button"
        onClick={() => {
          if (confirm(`Apagar todo o progresso de "${game.activeProfile.name}" (XP, ofensiva e lições)?`)) {
            game.resetProgress()
          }
        }}
        className="text-xs font-bold uppercase text-duo-gray-dark hover:text-duo-red"
      >
        Resetar progresso de {game.activeProfile.name}
      </button>
    </div>
  )
}
