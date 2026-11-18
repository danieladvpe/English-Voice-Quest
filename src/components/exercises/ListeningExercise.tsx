import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import type { ListeningExercise as ListeningEx } from '../../types'
import { useSpeech } from '../../hooks/useSpeech'
import { sameSentence } from '../../lib/compare'
import { sfx } from '../../lib/sounds'
import { AudioButtons } from '../AudioButtons'
import { ExerciseFooter, ExerciseTitle, shuffle, type ExerciseProps } from './shared'

/** Modo Listening (Escuta Ativa): montar a frase ou escolher o sentido correto. */
export function ListeningExercise({ exercise, onAnswer, locked }: ExerciseProps<ListeningEx>) {
  const speech = useSpeech()

  // Toca o áudio automaticamente ao entrar no exercício
  useEffect(() => {
    const t = setTimeout(() => void speech.speak(exercise.audio, 1), 350)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exercise.id])

  return (
    <div className="flex flex-col gap-8">
      <ExerciseTitle>{exercise.mode === 'build' ? 'Escreva o que você ouvir' : exercise.question}</ExerciseTitle>
      <div className="flex justify-center py-2">
        <AudioButtons isSpeaking={speech.isSpeaking} onPlay={(rate) => void speech.speak(exercise.audio, rate)} />
      </div>
      {exercise.mode === 'build' ? (
        <BuildSentence exercise={exercise} onAnswer={onAnswer} locked={locked} />
      ) : (
        <ChooseMeaning exercise={exercise} onAnswer={onAnswer} locked={locked} />
      )}
    </div>
  )
}

// ---------------------------------------------------------------------
// Montar frase com blocos de palavras
// ---------------------------------------------------------------------
function BuildSentence({
  exercise,
  onAnswer,
  locked,
}: ExerciseProps<Extract<ListeningEx, { mode: 'build' }>>) {
  const bank = useMemo(
    () => shuffle(exercise.wordBank.map((word, i) => ({ word, key: `${i}-${word}` })), exercise.id),
    [exercise],
  )
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (key: string) => {
    if (locked) return
    sfx.tap()
    setSelected((s) => (s.includes(key) ? s.filter((k) => k !== key) : [...s, key]))
  }

  const sentence = selected.map((k) => bank.find((b) => b.key === k)!.word).join(' ')

  const check = () => {
    const ok = sameSentence(sentence, exercise.audio)
    onAnswer({ status: ok ? 'correct' : 'wrong', correctAnswer: exercise.audio, note: exercise.translation })
  }

  return (
    <>
      {/* Linha de resposta */}
      <div className="flex min-h-[7.5rem] flex-wrap content-start gap-2 border-y-2 border-duo-gray py-3">
        {selected.map((key) => {
          const item = bank.find((b) => b.key === key)!
          return (
            <motion.button
              layoutId={key}
              key={key}
              type="button"
              onClick={() => toggle(key)}
              className="chip h-fit text-lg"
            >
              {item.word}
            </motion.button>
          )
        })}
      </div>

      {/* Banco de palavras */}
      <div className="flex flex-wrap justify-center gap-2">
        {bank.map((item) => {
          const used = selected.includes(item.key)
          return (
            <div key={item.key} className="rounded-xl bg-duo-gray">
              {used ? (
                <span className="chip invisible block text-lg">{item.word}</span>
              ) : (
                <motion.button layoutId={item.key} type="button" onClick={() => toggle(item.key)} className="chip block text-lg">
                  {item.word}
                </motion.button>
              )}
            </div>
          )
        })}
      </div>

      <ExerciseFooter>
        <span />
        <button
          type="button"
          disabled={locked || selected.length === 0}
          onClick={check}
          className={`${selected.length === 0 ? 'btn-disabled' : 'btn-primary'} w-full px-8 py-3.5 sm:w-auto`}
        >
          Verificar
        </button>
      </ExerciseFooter>
    </>
  )
}

// ---------------------------------------------------------------------
// Escolher a tradução / sentido correto
// ---------------------------------------------------------------------
function ChooseMeaning({
  exercise,
  onAnswer,
  locked,
}: ExerciseProps<Extract<ListeningEx, { mode: 'choice' }>>) {
  const [choice, setChoice] = useState<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const n = Number(e.key)
      if (!locked && n >= 1 && n <= exercise.options.length) {
        sfx.tap()
        setChoice(n - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [exercise.options.length, locked])

  const check = () => {
    if (choice === null) return
    onAnswer({
      status: choice === exercise.correctIndex ? 'correct' : 'wrong',
      correctAnswer: exercise.options[exercise.correctIndex],
      note: `“${exercise.audio}”`,
    })
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        {exercise.options.map((opt, i) => {
          const active = choice === i
          return (
            <motion.button
              key={opt}
              type="button"
              whileTap={{ scale: 0.98 }}
              disabled={locked}
              onClick={() => {
                sfx.tap()
                setChoice(i)
              }}
              className={`flex items-center gap-4 rounded-2xl border-2 px-4 py-4 text-left text-lg font-semibold transition ${
                active
                  ? 'border-duo-blue bg-duo-blue/10 text-duo-blue-dark shadow-[0_4px_0_var(--color-duo-blue)]'
                  : 'border-duo-gray shadow-[0_4px_0_var(--color-duo-gray)] hover:bg-gray-50'
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 text-sm font-bold ${
                  active ? 'border-duo-blue text-duo-blue' : 'border-duo-gray text-duo-gray-dark'
                }`}
              >
                {i + 1}
              </span>
              {opt}
            </motion.button>
          )
        })}
      </div>
      <ExerciseFooter>
        <span />
        <button
          type="button"
          disabled={locked || choice === null}
          onClick={check}
          className={`${choice === null ? 'btn-disabled' : 'btn-primary'} w-full px-8 py-3.5 sm:w-auto`}
        >
          Verificar
        </button>
      </ExerciseFooter>
    </>
  )
}
