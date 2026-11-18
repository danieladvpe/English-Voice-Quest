import { Volume2, Turtle } from 'lucide-react'
import { motion } from 'framer-motion'

interface Props {
  isSpeaking: boolean
  onPlay: (rate: number) => void
  size?: 'lg' | 'sm'
}

/** Botões de áudio: velocidade normal (1.0x) e tartaruga (0.7x). */
export function AudioButtons({ isSpeaking, onPlay, size = 'lg' }: Props) {
  const big = size === 'lg'
  return (
    <div className="flex items-end gap-3">
      <motion.button
        type="button"
        aria-label="Ouvir em velocidade normal (1.0x)"
        title="Velocidade normal (1.0x)"
        onClick={() => onPlay(1)}
        whileTap={{ scale: 0.92 }}
        animate={isSpeaking ? { scale: [1, 1.06, 1] } : { scale: 1 }}
        transition={isSpeaking ? { repeat: Infinity, duration: 0.8 } : undefined}
        className={`btn-blue flex items-center justify-center ${big ? 'h-20 w-20 rounded-3xl' : 'h-12 w-12 rounded-2xl'}`}
      >
        <Volume2 className={big ? 'h-10 w-10' : 'h-6 w-6'} strokeWidth={2.5} />
      </motion.button>
      <motion.button
        type="button"
        aria-label="Ouvir devagar (0.7x)"
        title="Devagar (0.7x)"
        onClick={() => onPlay(0.7)}
        whileTap={{ scale: 0.92 }}
        className={`btn-blue flex items-center justify-center ${big ? 'h-14 w-14 rounded-2xl' : 'h-10 w-10 rounded-xl'}`}
      >
        <Turtle className={big ? 'h-7 w-7' : 'h-5 w-5'} strokeWidth={2.5} />
      </motion.button>
    </div>
  )
}
