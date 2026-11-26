import { useSyncExternalStore } from 'react'
import { ALL_LESSONS } from '../data/lessons'

// =====================================================================
// Store de gamificação persistido em localStorage com suporte a
// Múltiplos Perfis Familiares (implementação leve com useSyncExternalStore)
// =====================================================================

const LEGACY_STORAGE_KEY = 'speakquest:v1'
const FAMILY_STORAGE_KEY = 'speakquest:family:v1'
export const MAX_HEARTS = 5
/** Regeneração passiva: +1 coração a cada 30 minutos. */
const HEART_REGEN_MS = 30 * 60 * 1000

export const FAMILY_AVATARS = ['🦁', '🦊', '🐼', '🦉', '🐯', '🦄', '🐸', '🐧', '🐨', '🚀', '👑', '⚡'] as const

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

export interface FamilyProfile extends GameState {
  id: string
  name: string
  avatar: string
  createdAt: string
}

interface FamilyStoreState {
  activeProfileId: string
  profiles: FamilyProfile[]
}

const initialGameState: GameState = {
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

function makeId(): string {
  return `p_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
}

/** Aplica regras dependentes do tempo: quebra de ofensiva e regeneração de vidas. */
function normalizeProfile(s: FamilyProfile): FamilyProfile {
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
      next = {
        ...next,
        hearts,
        lastHeartUpdate: hearts === MAX_HEARTS ? Date.now() : next.lastHeartUpdate + gained * HEART_REGEN_MS,
      }
    }
  }
  return next
}

function normalizeFamily(store: FamilyStoreState): FamilyStoreState {
  let changed = false
  const profiles = store.profiles.map((p) => {
    const n = normalizeProfile(p)
    if (n !== p) changed = true
    return n
  })
  const activeExists = profiles.some((p) => p.id === store.activeProfileId)
  const activeProfileId = activeExists ? store.activeProfileId : (profiles[0]?.id ?? 'default')
  if (!changed && activeProfileId === store.activeProfileId) return store
  return { activeProfileId, profiles }
}

// ---------- persistência (com migração transparente do formato v1) ----------
function load(): FamilyStoreState {
  try {
    const rawFamily = localStorage.getItem(FAMILY_STORAGE_KEY)
    if (rawFamily) {
      const parsed = JSON.parse(rawFamily) as FamilyStoreState
      if (Array.isArray(parsed.profiles) && parsed.profiles.length > 0) {
        return normalizeFamily(parsed)
      }
    }

    // Migra dados existentes do speakquest:v1 se houver
    const rawLegacy = localStorage.getItem(LEGACY_STORAGE_KEY)
    const legacyGame: GameState = rawLegacy ? { ...initialGameState, ...JSON.parse(rawLegacy) } : { ...initialGameState }
    const defaultProfile: FamilyProfile = normalizeProfile({
      ...legacyGame,
      id: 'default',
      name: 'Jogador 1',
      avatar: '🦁',
      createdAt: new Date().toISOString(),
    })

    const initialStore: FamilyStoreState = {
      activeProfileId: defaultProfile.id,
      profiles: [defaultProfile],
    }
    localStorage.setItem(FAMILY_STORAGE_KEY, JSON.stringify(initialStore))
    return initialStore
  } catch {
    const fallback: FamilyProfile = {
      ...initialGameState,
      id: 'default',
      name: 'Jogador 1',
      avatar: '🦁',
      createdAt: new Date().toISOString(),
    }
    return { activeProfileId: fallback.id, profiles: [fallback] }
  }
}

let familyState: FamilyStoreState = load()
const listeners = new Set<() => void>()

function getActiveProfile(store = familyState): FamilyProfile {
  return store.profiles.find((p) => p.id === store.activeProfileId) ?? store.profiles[0]
}

function setFamilyState(updater: (s: FamilyStoreState) => FamilyStoreState) {
  familyState = updater(familyState)
  try {
    localStorage.setItem(FAMILY_STORAGE_KEY, JSON.stringify(familyState))
  } catch {
    /* storage cheio/privado: segue apenas em memória */
  }
  listeners.forEach((l) => l())
}

function updateActiveProfile(updater: (p: FamilyProfile) => FamilyProfile) {
  setFamilyState((store) => {
    const current = getActiveProfile(store)
    const updated = updater(current)
    return {
      ...store,
      profiles: store.profiles.map((p) => (p.id === current.id ? updated : p)),
    }
  })
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

// Reavalia regras de tempo periodicamente e ao voltar para a aba
if (typeof window !== 'undefined') {
  const tick = () => {
    const n = normalizeFamily(familyState)
    if (n !== familyState) setFamilyState(() => n)
  }
  window.setInterval(tick, 60_000)
  document.addEventListener('visibilitychange', () => document.visibilityState === 'visible' && tick())
  window.addEventListener('storage', (e) => {
    if (e.key === FAMILY_STORAGE_KEY) {
      familyState = load()
      listeners.forEach((l) => l())
    }
  })
}

// ---------- ações ----------
export const gameActions = {
  loseHeart() {
    updateActiveProfile((s) => ({
      ...s,
      hearts: Math.max(0, s.hearts - 1),
      lastHeartUpdate: s.hearts === MAX_HEARTS ? Date.now() : s.lastHeartUpdate,
    }))
  },

  refillHearts() {
    updateActiveProfile((s) => ({ ...s, hearts: MAX_HEARTS, lastHeartUpdate: Date.now() }))
  },

  /** Conclui a lição: soma XP, atualiza ofensiva e regenera as vidas. */
  completeLesson(lessonId: string, xpEarned: number) {
    updateActiveProfile((s) => {
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
    updateActiveProfile((s) => ({
      ...s,
      ...initialGameState,
      lastHeartUpdate: Date.now(),
    }))
  },

  // ---------- gestão de perfis da família ----------
  switchProfile(profileId: string) {
    setFamilyState((store) => {
      if (!store.profiles.some((p) => p.id === profileId)) return store
      return { ...store, activeProfileId: profileId }
    })
  },

  addProfile(name: string, avatar: string) {
    const cleanName = name.trim() || 'Familiar'
    const newProfile: FamilyProfile = {
      ...initialGameState,
      lastHeartUpdate: Date.now(),
      id: makeId(),
      name: cleanName,
      avatar: avatar || '🦁',
      createdAt: new Date().toISOString(),
    }
    setFamilyState((store) => ({
      activeProfileId: newProfile.id,
      profiles: [...store.profiles, newProfile],
    }))
  },

  updateProfileInfo(profileId: string, name: string, avatar: string) {
    const cleanName = name.trim()
    if (!cleanName) return
    setFamilyState((store) => ({
      ...store,
      profiles: store.profiles.map((p) => (p.id === profileId ? { ...p, name: cleanName, avatar } : p)),
    }))
  },

  deleteProfile(profileId: string) {
    setFamilyState((store) => {
      if (store.profiles.length <= 1) return store
      const remaining = store.profiles.filter((p) => p.id !== profileId)
      const activeProfileId = store.activeProfileId === profileId ? remaining[0].id : store.activeProfileId
      return { activeProfileId, profiles: remaining }
    })
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
export type UseGameStoreReturn = FamilyProfile &
  typeof gameActions & {
    profiles: FamilyProfile[]
    activeProfile: FamilyProfile
  }

export function useGameStore(): UseGameStoreReturn {
  const store = useSyncExternalStore(subscribe, () => familyState, () => familyState)
  const activeProfile = getActiveProfile(store)
  return {
    ...activeProfile,
    activeProfile,
    profiles: store.profiles,
    ...gameActions,
  }
}
