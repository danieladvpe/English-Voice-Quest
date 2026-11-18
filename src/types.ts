// ===== Tipos de domínio do SpeakQuest =====

export type ExerciseType = 'listening' | 'speaking' | 'roleplay'

/** Escuta ativa: ouvir e montar a frase com blocos de palavras. */
export interface ListeningBuildExercise {
  id: string
  type: 'listening'
  mode: 'build'
  /** Frase em inglês que será falada (e a resposta esperada). */
  audio: string
  translation: string
  /** Banco de palavras (inclui distratores). A ordem é embaralhada em runtime. */
  wordBank: string[]
}

/** Escuta ativa: ouvir e escolher a tradução/sentido correto. */
export interface ListeningChoiceExercise {
  id: string
  type: 'listening'
  mode: 'choice'
  audio: string
  question: string
  options: string[]
  correctIndex: number
}

export type ListeningExercise = ListeningBuildExercise | ListeningChoiceExercise

/** Pronúncia & Shadowing: ouvir, repetir e comparar palavra a palavra. */
export interface SpeakingExercise {
  id: string
  type: 'speaking'
  text: string
  translation: string
  /** Percentual mínimo de palavras corretas para aprovar (0..1). Default 0.7 */
  passThreshold?: number
}

/** Mini-diálogo: pergunta em áudio, resposta por voz dentro do contexto. */
export interface RoleplayExercise {
  id: string
  type: 'roleplay'
  scene: string
  character: { name: string; emoji: string }
  question: string
  questionTranslation: string
  suggestedResponses: { text: string; translation: string }[]
  /** Palavras-chave aceitas para respostas livres/naturais. */
  keywords: string[]
}

export type Exercise = ListeningExercise | SpeakingExercise | RoleplayExercise

export interface Lesson {
  id: string
  title: string
  description: string
  exercises: Exercise[]
}

export interface Unit {
  id: string
  number: number
  title: string
  description: string
  color: 'green' | 'blue' | 'purple'
  /** Unidade ainda em produção (sem conteúdo jogável). */
  comingSoon?: boolean
  lessons: Lesson[]
}
