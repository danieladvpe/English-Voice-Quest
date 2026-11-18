import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, Lightbulb } from 'lucide-react'
import type { RoleplayExercise as RoleplayEx } from '../../types'
import { useSpeech } from '../../hooks/useSpeech'
import { similarity, tokenize } from '../../lib/compare'
import { sfx } from '../../lib/sounds'
import { AudioButtons } from '../AudioButtons'
import { SpeechArea } from './SpeakingExercise'
import { ExerciseTitle, type ExerciseProps } from './shared'

const MAX_ATTEMPTS = 2
const SIMILARITY_PASS = 0.6

/** Avalia se a resposta falada faz sentido no contexto do diálogo. */
function evaluate(exercise: RoleplayEx, spoken: string): { ok: boolean; score: number } {
  const best = Math.max(...exercise.suggestedResponses.map((r) => similarity(r.text, spoken)))
  const spokenNorm = ` ${tokenize(spoken).join(' ')} `
  const hasKeyword = exercise.keywords.some((k) => spokenNorm.includes(` ${tokenize(k).join(' ')} `))
  const wordCount = tokenize(spoken).length
  return { ok: best >= SIMILARITY_PASS || (hasKeyword && wordCount >= 2), score: best }
}

/** Modo Roleplay (Mini-Diálogo). */
export function RoleplayExercise({ exercise, onAnswer, locked }: ExerciseProps<RoleplayEx>) {
  const speech = useSpeech()
  const [showTranslation, setShowTranslation] = useState(false)
  const [userReply, setUserReply] = useState<{ text: string; ok: boolean } | null>(null)
  const [attempts, setAttempts] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => void speech.speak(exercise.question, 1), 350)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exercise.id])

  const record = async () => {
    sfx.micOn()
    const result = await speech.listen()
    if (!result) return
    const best = result.alternatives
      .map((alt) => ({ alt, ...evaluate(exercise, alt) }))
      .sort((a, b) => Number(b.ok) - Number(a.ok) || b.score - a.score)[0]
    setUserReply({ text: best.alt, ok: best.ok })
    const n = attempts + 1
    setAttempts(n)
    if (best.ok) {
      onAnswer({ status: 'correct', note: 'Resposta natural e dentro do contexto!' })
    } else if (n >= MAX_ATTEMPTS) {
      onAnswer({
        status: 'wrong',
        correctAnswer: exercise.suggestedResponses[0].text,
        note: `Você disse: “${best.alt}”`,
      })
    } else {
      sfx.wrong()
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <ExerciseTitle>Responda em voz alta</ExerciseTitle>
      <p className="-mt-3 text-sm font-semibold text-duo-gray-dark">🎬 {exercise.scene}</p>

      {/* Bolha do personagem */}
      <div className="flex items-start gap-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-duo-purple/20 text-4xl"
          aria-label={exercise.character.name}
        >
          {exercise.character.emoji}
        </motion.div>
        <div className="flex-1">
          <p className="mb-1 text-xs font-extrabold uppercase text-duo-gray-dark">{exercise.character.name}</p>
          <div className="relative rounded-2xl rounded-tl-sm border-2 border-duo-gray px-4 py-3">
            <div className="flex items-center gap-3">
              <AudioButtons size="sm" isSpeaking={speech.isSpeaking} onPlay={(rate) => void speech.speak(exercise.question, rate)} />
              <button
                type="button"
                onClick={() => setShowTranslation((v) => !v)}
                className="text-left text-xl font-bold decoration-dotted underline-offset-4 hover:underline"
                title="Mostrar tradução"
              >
                {exercise.question}
              </button>
            </div>
            <AnimatePresence>
              {showTranslation && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-2 text-sm font-semibold text-duo-gray-dark"
                >
                  {exercise.questionTranslation}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bolha do usuário */}
      <AnimatePresence>
        {userReply && (
          <motion.div
            key={attempts}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-end"
          >
            <div
              className={`max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-3 text-lg font-bold text-white ${
                userReply.ok ? 'bg-duo-green' : 'bg-duo-red'
              }`}
            >
              “{userReply.text}”
              {!userReply.ok && !locked && (
                <span className="mt-1 block text-sm font-semibold opacity-90">
                  Hmm, não combinou com a pergunta. Tente uma das sugestões! ({attempts}/{MAX_ATTEMPTS})
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sugestões */}
      <div>
        <p className="mb-2 flex items-center gap-1.5 text-sm font-extrabold uppercase text-duo-gray-dark">
          <Lightbulb className="h-4 w-4" /> Sugestões (ou responda livremente)
        </p>
        <div className="flex flex-col gap-2">
          {exercise.suggestedResponses.map((r) => (
            <button
              key={r.text}
              type="button"
              onClick={() => void speech.speak(r.text, 0.9)}
              className="flex items-center gap-3 rounded-2xl border-2 border-duo-gray px-4 py-2.5 text-left shadow-[0_3px_0_var(--color-duo-gray)] transition hover:bg-gray-50 active:translate-y-0.5 active:shadow-none"
            >
              <Volume2 className="h-5 w-5 shrink-0 text-duo-blue" />
              <span>
                <span className="block font-bold">{r.text}</span>
                <span className="block text-sm text-duo-gray-dark">{r.translation}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <SpeechArea
        speech={speech}
        locked={locked}
        onStart={record}
        onSkip={() => onAnswer({ status: 'skipped', correctAnswer: exercise.suggestedResponses[0].text })}
      />
    </div>
  )
}
