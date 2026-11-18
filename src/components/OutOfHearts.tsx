import { motion } from 'framer-motion'
import { HeartCrack } from 'lucide-react'
import { useGameStore, msToNextHeart } from '../store/useGameStore'

/** Tela exibida quando as vidas acabam. */
export function OutOfHearts({ onExit }: { onExit: () => void }) {
  const game = useGameStore()
  const minutes = Math.ceil(msToNextHeart(game) / 60000)

  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-4 px-6 text-center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }}>
        <HeartCrack className="h-24 w-24 fill-duo-red/20 text-duo-red" />
      </motion.div>
      <h1 className="text-3xl font-black">Suas vidas acabaram!</h1>
      <p className="max-w-sm text-duo-gray-dark">
        Uma nova vida regenera em ~{minutes} min, e todas são recarregadas quando você conclui uma lição.
      </p>
      <button
        type="button"
        onClick={() => game.refillHearts()}
        className="btn-blue mt-4 w-full max-w-sm py-3.5"
      >
        Recarregar vidas (modo treino)
      </button>
      <button type="button" onClick={onExit} className="w-full max-w-sm py-3 font-extrabold uppercase text-duo-gray-dark">
        Voltar para a trilha
      </button>
    </div>
  )
}
