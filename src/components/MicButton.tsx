import { useRef } from 'react'
import { Mic } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  isListening: boolean
  disabled?: boolean
  onStart: () => void
  onStop: () => void
}

/**
 * Microfone com dois modos de uso:
 *  - Toque rápido: começa a ouvir e para sozinho quando você termina de falar.
 *  - Segurar: grava enquanto pressionado e envia ao soltar.
 */
export function MicButton({ isListening, disabled, onStart, onStop }: Props) {
  const pressedAt = useRef<number | null>(null)

  const handleDown = () => {
    if (disabled) return
    if (isListening) {
      onStop()
      return
    }
    pressedAt.current = Date.now()
    onStart()
  }

  const handleUp = () => {
    if (pressedAt.current && Date.now() - pressedAt.current > 450) onStop()
    pressedAt.current = null
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <AnimatePresence>
          {isListening && (
            <>
              {[0, 0.5].map((delay) => (
                <motion.span
                  key={delay}
                  className="absolute inset-0 rounded-full bg-duo-blue/40"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 1.2, delay }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
        <motion.button
          type="button"
          aria-label={isListening ? 'Parar gravação' : 'Falar'}
          disabled={disabled}
          onPointerDown={handleDown}
          onPointerUp={handleUp}
          onPointerLeave={handleUp}
          onContextMenu={(e) => e.preventDefault()}
          whileTap={{ scale: 0.94 }}
          className={`relative flex h-24 w-24 touch-none items-center justify-center rounded-full ${
            disabled ? 'btn-disabled !rounded-full' : isListening ? 'btn-danger !rounded-full' : 'btn-blue !rounded-full'
          }`}
        >
          <Mic className="h-11 w-11" strokeWidth={2.5} />
        </motion.button>
      </div>
      <p className="text-sm font-bold text-duo-gray-dark">
        {isListening ? 'Ouvindo… toque para enviar' : 'Toque ou segure para falar'}
      </p>
    </div>
  )
}
