import { useMemo, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Zap, Target, Clock, Flame } from 'lucide-react'
import type { Lesson } from '../types'
import { useGameStore } from '../store/useGameStore'

interface Props {
  lesson: Lesson
  xp: number
  accuracy: number
  seconds: number
  onContinue: () => void
}

const CONFETTI_COLORS = ['#58cc02', '#1cb0f6', '#ffc800', '#ff4b4b', '#ce82ff', '#ff9600']

/** Tela de conclusão com XP ganho e celebração. */
export function LessonComplete({ lesson, xp, accuracy, seconds, onContinue }: Props) {
  const { streak } = useGameStore()
  const confetti = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 700,
        y: -Math.random() * 500 - 150,
        rotate: Math.random() * 720,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        delay: Math.random() * 0.2,
        size: 6 + Math.random() * 8,
      })),
    [],
  )
  const time = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`

  return (
    <div className="relative flex min-h-full flex-col items-center justify-center overflow-hidden px-4 pb-32 pt-10 text-center">
      {/* Confete */}
      <div className="pointer-events-none absolute left-1/2 top-1/2">
        {confetti.map((c) => (
          <motion.span
            key={c.id}
            className="absolute rounded-sm"
            style={{ width: c.size, height: c.size * 0.5, backgroundColor: c.color }}
            initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
            animate={{ x: c.x, y: [0, c.y, c.y + 700], opacity: [1, 1, 0], rotate: c.rotate }}
            transition={{ duration: 2.4, delay: c.delay, ease: 'easeOut' }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        className="text-8xl"
      >
        🏆
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-3xl font-black text-duo-gold-dark"
      >
        Lição concluída!
      </motion.h1>
      <p className="mt-1 font-semibold text-duo-gray-dark">{lesson.title}</p>

      <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-3">
        <StatCard delay={0.5} color="bg-duo-gold" label="XP total" icon={<Zap className="h-5 w-5" />} value={`+${xp}`} />
        <StatCard
          delay={0.65}
          color="bg-duo-green"
          label={accuracy === 100 ? 'Perfeito' : 'Precisão'}
          icon={<Target className="h-5 w-5" />}
          value={`${accuracy}%`}
        />
        <StatCard delay={0.8} color="bg-duo-blue" label="Tempo" icon={<Clock className="h-5 w-5" />} value={time} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 flex items-center gap-2 rounded-2xl bg-duo-orange/10 px-4 py-2 font-extrabold text-duo-orange"
      >
        <Flame className="h-5 w-5 fill-duo-orange" /> Ofensiva de {streak} {streak === 1 ? 'dia' : 'dias'}! Vidas recarregadas ❤️
      </motion.div>

      <div className="fixed inset-x-0 bottom-0 border-t-2 border-duo-gray bg-white pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto flex max-w-2xl justify-end px-4 py-5">
          <button type="button" autoFocus onClick={onContinue} className="btn-primary w-full px-10 py-3.5 sm:w-auto">
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value, icon, color, delay }: { label: string; value: string; icon: ReactNode; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: 'spring' }}
      className={`overflow-hidden rounded-2xl border-2 ${color} border-transparent`}
    >
      <p className="py-1 text-xs font-extrabold uppercase text-white">{label}</p>
      <div className="m-0.5 flex items-center justify-center gap-1 rounded-xl bg-white py-3 text-xl font-black">
        {icon}
        {value}
      </div>
    </motion.div>
  )
}
