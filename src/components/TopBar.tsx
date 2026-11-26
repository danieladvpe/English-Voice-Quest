import { useState, type ReactNode } from 'react'
import { Flame, Zap, Heart, Download, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { useGameStore, didPracticeToday, MAX_HEARTS, msToNextHeart } from '../store/useGameStore'
import { usePwaInstall } from '../lib/usePwaInstall'
import { FamilyProfilesModal } from './FamilyProfilesModal'
import { sfx } from '../lib/sounds'

/** Barra superior de gamificação: Perfil Familiar, Instalar App, Ofensiva, XP e Vidas. */
export function TopBar() {
  const game = useGameStore()
  const { canPrompt, isInstalled } = usePwaInstall()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTab, setModalTab] = useState<'profiles' | 'install'>('profiles')

  const practiced = didPracticeToday(game)
  const nextHeartMin = Math.ceil(msToNextHeart(game) / 60000)

  function openModal(tab: 'profiles' | 'install') {
    sfx.tap()
    setModalTab(tab)
    setModalOpen(true)
  }

  return (
    <>
      <header className="sticky top-0 z-30 border-b-2 border-duo-gray bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3">
          {/* Botão de Perfil Familiar */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openModal('profiles')}
              title="Trocar perfil da família ou ver ranking"
              className="flex items-center gap-1.5 rounded-2xl border-2 border-duo-gray bg-white px-2.5 py-1.5 text-left transition hover:border-duo-green active:scale-95"
            >
              <span className="text-xl leading-none" aria-hidden>
                {game.activeProfile.avatar}
              </span>
              <span className="max-w-[88px] truncate text-xs font-extrabold text-duo-ink sm:max-w-[130px] sm:text-sm">
                {game.activeProfile.name}
              </span>
              <Users className="h-3.5 w-3.5 text-duo-gray-dark" />
            </button>

            {!isInstalled && (
              <button
                type="button"
                onClick={() => openModal('install')}
                title="Instalar App no Android"
                className={`flex items-center gap-1 rounded-2xl px-2.5 py-1.5 text-xs font-extrabold uppercase transition active:scale-95 ${
                  canPrompt
                    ? 'bg-duo-green text-white shadow-[0_2px_0_var(--color-duo-green-dark)]'
                    : 'border-2 border-duo-blue/40 bg-duo-blue/10 text-duo-blue'
                }`}
              >
                <Download className="h-3.5 w-3.5" />
                <span className="hidden xs:inline sm:inline">App</span>
              </button>
            )}
          </div>

          {/* Estatísticas do Perfil Ativo */}
          <div className="flex items-center gap-3.5 sm:gap-5">
            <Stat
              title={practiced ? 'Ofensiva ativa hoje!' : 'Complete uma lição para manter a ofensiva'}
              icon={<Flame className={`h-5 w-5 sm:h-6 sm:w-6 ${practiced ? 'fill-duo-orange text-duo-orange' : 'text-duo-gray-dark'}`} />}
              value={game.streak}
              color={practiced ? 'text-duo-orange' : 'text-duo-gray-dark'}
            />
            <Stat
              title="XP total"
              icon={<Zap className="h-5 w-5 sm:h-6 sm:w-6 fill-duo-gold text-duo-gold" />}
              value={game.xp}
              color="text-duo-gold-dark"
            />
            <Stat
              title={
                game.hearts < MAX_HEARTS
                  ? `Vidas: ${game.hearts}/${MAX_HEARTS} — próxima em ~${nextHeartMin} min`
                  : 'Vidas cheias'
              }
              icon={<Heart className="h-5 w-5 sm:h-6 sm:w-6 fill-duo-red text-duo-red" />}
              value={game.hearts}
              color="text-duo-red"
            />
          </div>
        </div>
      </header>

      <FamilyProfilesModal open={modalOpen} onClose={() => setModalOpen(false)} initialTab={modalTab} />
    </>
  )
}

function Stat({ icon, value, color, title }: { icon: ReactNode; value: number; color: string; title: string }) {
  return (
    <div className="flex items-center gap-1" title={title}>
      {icon}
      <motion.span
        key={value}
        initial={{ scale: 1.4 }}
        animate={{ scale: 1 }}
        className={`text-base font-extrabold tabular-nums sm:text-lg ${color}`}
      >
        {value}
      </motion.span>
    </div>
  )
}
