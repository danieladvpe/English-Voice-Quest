import { Volume2, Turtle, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

interface Props {
  isSpeaking: boolean
  onPlay: (rate: number) => void
  size?: 'lg' | 'sm'
}

/** Botões de áudio: velocidade normal (1.0x), tartaruga (0.7x) e nativo rápido (1.25x). */
export function AudioButtons({ isSpeaking, onPlay, size = 'lg' }: Props) {
  const big = size === 'lg'
  const secondary = `btn-blue flex flex-col items-center justify-center ${big ? 'h-14 w-14 rounded-2xl' : 'h-10 w-10 rounded-xl'}`
  const label = `font-black leading-none ${big ? 'text-[10px] mt-0.5' : 'text-[8px]'}`

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
        className={secondary}
      >
        <Turtle className={big ? 'h-6 w-6' : 'h-4 w-4'} strokeWidth={2.5} />
        <span className={label}>0.7x</span>
      </motion.button>
      <motion.button
        type="button"
        aria-label="Ouvir em ritmo nativo rápido (1.25x)"
        title="Nativo Rápido (1.25x)"
        onClick={() => onPlay(1.25)}
        whileTap={{ scale: 0.92 }}
        className={secondary}
      >
        <Zap className={big ? 'h-5 w-5' : 'h-3.5 w-3.5'} strokeWidth={2.5} />
        <span className={label}>1.25x</span>
      </motion.button>
    </div>
  )
}
