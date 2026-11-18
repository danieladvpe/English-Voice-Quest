import type { ReactNode } from 'react'
import { Flame, Zap, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useGameStore, didPracticeToday, MAX_HEARTS, msToNextHeart } from '../store/useGameStore'

/** Barra superior de gamificação: Ofensiva, XP e Vidas. */
export function TopBar() {
  const game = useGameStore()
  const practiced = didPracticeToday(game)
  const nextHeartMin = Math.ceil(msToNextHeart(game) / 60000)

  return (
    <header className="sticky top-0 z-30 border-b-2 border-duo-gray bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden>
            🇺🇸
          </span>
          <span className="hidden text-lg font-black tracking-tight text-duo-green sm:inline">SpeakQuest</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <Stat
            title={practiced ? 'Ofensiva ativa hoje!' : 'Complete uma lição para manter a ofensiva'}
            icon={<Flame className={`h-6 w-6 ${practiced ? 'fill-duo-orange text-duo-orange' : 'text-duo-gray-dark'}`} />}
            value={game.streak}
            color={practiced ? 'text-duo-orange' : 'text-duo-gray-dark'}
          />
          <Stat
            title="XP total"
            icon={<Zap className="h-6 w-6 fill-duo-gold text-duo-gold" />}
            value={game.xp}
            color="text-duo-gold-dark"
          />
          <Stat
            title={
              game.hearts < MAX_HEARTS
                ? `Vidas: ${game.hearts}/${MAX_HEARTS} — próxima em ~${nextHeartMin} min`
                : 'Vidas cheias'
            }
            icon={<Heart className="h-6 w-6 fill-duo-red text-duo-red" />}
            value={game.hearts}
            color="text-duo-red"
          />
        </div>
      </div>
    </header>
  )
}

function Stat({ icon, value, color, title }: { icon: ReactNode; value: number; color: string; title: string }) {
  return (
    <div className="flex items-center gap-1.5" title={title}>
      {icon}
      <motion.span
        key={value}
        initial={{ scale: 1.4 }}
        animate={{ scale: 1 }}
        className={`text-lg font-extrabold tabular-nums ${color}`}
      >
        {value}
      </motion.span>
    </div>
  )
}
