import { useSyncExternalStore } from 'react'
import { ALL_LESSONS } from '../data/lessons'

// =====================================================================
// Store de gamificação persistido em localStorage
// (implementação leve com useSyncExternalStore, sem dependências)
// =====================================================================

const STORAGE_KEY = 'speakquest:v1'
export const MAX_HEARTS = 5
/** Regeneração passiva: +1 coração a cada 30 minutos. */
const HEART_REGEN_MS = 30 * 60 * 1000

export interface LessonProgress {
  timesCompleted: number
  bestXp: number
  lastCompletedAt: string
}

export interface GameState {
  xp: number
  streak: number
  longestStreak: number
  /** Data local (YYYY-MM-DD) da última lição concluída. */
  lastActiveDate: string | null
  hearts: number
  lastHeartUpdate: number
  lessons: Record<string, LessonProgress>
}

const initialState: GameState = {
  xp: 0,
  streak: 0,
  longestStreak: 0,
  lastActiveDate: null,
  hearts: MAX_HEARTS,
  lastHeartUpdate: Date.now(),
  lessons: {},
}

// ---------- helpers de data ----------
function localDate(d = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}
function yesterday(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return localDate(d)
}

// ---------- persistência ----------
function load(): GameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...initialState }
    return normalize({ ...initialState, ...JSON.parse(raw) })
  } catch {
    return { ...initialState }
  }
}

/** Aplica regras dependentes do tempo: quebra de ofensiva e regeneração de vidas. */
function normalize(s: GameState): GameState {
  let next = s
  // Ofensiva quebra se o último dia ativo foi antes de ontem
  if (next.lastActiveDate && next.lastActiveDate !== localDate() && next.lastActiveDate !== yesterday() && next.streak > 0) {
    next = { ...next, streak: 0 }
  }
  // Regeneração passiva de corações
  if (next.hearts < MAX_HEARTS) {
    const elapsed = Date.now() - next.lastHeartUpdate
    const gained = Math.floor(elapsed / HEART_REGEN_MS)
    if (gained > 0) {
      const hearts = Math.min(MAX_HEARTS, next.hearts + gained)
      next = { ...next, hearts, lastHeartUpdate: hearts === MAX_HEARTS ? Date.now() : next.lastHeartUpdate + gained * HEART_REGEN_MS }
    }
  }
  return next
}

let state: GameState = load()
const listeners = new Set<() => void>()

function setState(updater: (s: GameState) => GameState) {
  state = updater(state)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* storage cheio/privado: segue apenas em memória */
  }
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

// Reavalia regras de tempo periodicamente e ao voltar para a aba
if (typeof window !== 'undefined') {
  const tick = () => {
    const n = normalize(state)
    if (n !== state) setState(() => n)
  }
  window.setInterval(tick, 60_000)
  document.addEventListener('visibilitychange', () => document.visibilityState === 'visible' && tick())
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      state = load()
      listeners.forEach((l) => l())
    }
  })
}

// ---------- ações ----------
export const gameActions = {
  loseHeart() {
    setState((s) => ({
      ...s,
      hearts: Math.max(0, s.hearts - 1),
      lastHeartUpdate: s.hearts === MAX_HEARTS ? Date.now() : s.lastHeartUpdate,
    }))
  },

  refillHearts() {
    setState((s) => ({ ...s, hearts: MAX_HEARTS, lastHeartUpdate: Date.now() }))
  },

  /** Conclui a lição: soma XP, atualiza ofensiva e regenera as vidas. */
  completeLesson(lessonId: string, xpEarned: number) {
    setState((s) => {
      const today = localDate()
      let streak = s.streak
      if (s.lastActiveDate !== today) {
        streak = s.lastActiveDate === yesterday() ? s.streak + 1 : 1
      }
      const prev = s.lessons[lessonId]
      return {
        ...s,
        xp: s.xp + xpEarned,
        streak,
        longestStreak: Math.max(s.longestStreak, streak),
        lastActiveDate: today,
        hearts: MAX_HEARTS,
        lastHeartUpdate: Date.now(),
        lessons: {
          ...s.lessons,
          [lessonId]: {
            timesCompleted: (prev?.timesCompleted ?? 0) + 1,
            bestXp: Math.max(prev?.bestXp ?? 0, xpEarned),
            lastCompletedAt: new Date().toISOString(),
          },
        },
      }
    })
  },

  resetProgress() {
    setState(() => ({ ...initialState, lastHeartUpdate: Date.now() }))
  },
}

// ---------- seletores ----------
export function isLessonCompleted(s: GameState, lessonId: string) {
  return !!s.lessons[lessonId]
}

/** Uma lição é liberada quando a anterior (na ordem global) foi concluída. */
export function isLessonUnlocked(s: GameState, lessonId: string) {
  const idx = ALL_LESSONS.findIndex((l) => l.id === lessonId)
  if (idx <= 0) return true
  return isLessonCompleted(s, ALL_LESSONS[idx - 1].id)
}

export function didPracticeToday(s: GameState) {
  return s.lastActiveDate === localDate()
}

/** Milissegundos até o próximo coração regenerar (0 se cheio). */
export function msToNextHeart(s: GameState) {
  if (s.hearts >= MAX_HEARTS) return 0
  return Math.max(0, HEART_REGEN_MS - (Date.now() - s.lastHeartUpdate))
}

// ---------- hook ----------
export function useGameStore(): GameState & typeof gameActions {
  const snapshot = useSyncExternalStore(subscribe, () => state, () => state)
  return { ...snapshot, ...gameActions }
}
