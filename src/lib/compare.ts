// =====================================================================
// Comparação de fala x frase-alvo (alinhamento por LCS palavra a palavra)
// =====================================================================

const CONTRACTIONS: Record<string, string> = {
  "i'm": 'i am',
  "you're": 'you are',
  "we're": 'we are',
  "they're": 'they are',
  "it's": 'it is',
  "that's": 'that is',
  "what's": 'what is',
  "don't": 'do not',
  "doesn't": 'does not',
  "can't": 'can not',
  cannot: 'can not',
  "i'd": 'i would',
  "i'll": 'i will',
}

/** Normaliza uma palavra: minúsculas, sem pontuação, apóstrofos unificados. */
export function normalizeWord(w: string): string {
  return w
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9']/g, '')
}

/** Tokeniza e expande contrações para comparação justa. */
export function tokenize(text: string): string[] {
  return text
    .split(/\s+/)
    .map(normalizeWord)
    .filter(Boolean)
    .flatMap((w) => (CONTRACTIONS[w] ?? w).split(' '))
}

export interface WordResult {
  /** Palavra como aparece na frase-alvo (com pontuação). */
  display: string
  correct: boolean
}

/**
 * Compara a frase-alvo com o que foi reconhecido.
 * Retorna cada palavra exibível da frase-alvo marcada como correta/incorreta + score (0..1).
 */
export function compareSpeech(target: string, spoken: string): { words: WordResult[]; score: number } {
  const displayWords = target.split(/\s+/).filter(Boolean)
  // Cada palavra exibida pode virar 1+ tokens (ex.: "I'm" -> "i","am")
  const tokenOwners: number[] = []
  const targetTokens: string[] = []
  displayWords.forEach((dw, i) => {
    tokenize(dw).forEach((t) => {
      targetTokens.push(t)
      tokenOwners.push(i)
    })
  })
  const spokenTokens = tokenize(spoken)

  // LCS clássico
  const n = targetTokens.length
  const m = spokenTokens.length
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = targetTokens[i] === spokenTokens[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1])
    }
  }
  const matched = new Array(n).fill(false)
  let i = 0
  let j = 0
  while (i < n && j < m) {
    if (targetTokens[i] === spokenTokens[j]) {
      matched[i] = true
      i++
      j++
    } else if (dp[i + 1][j] >= dp[i][j + 1]) i++
    else j++
  }

  // Uma palavra exibida é correta se todos os seus tokens foram encontrados
  const words: WordResult[] = displayWords.map((display, idx) => {
    const owned = tokenOwners.map((o, k) => (o === idx ? k : -1)).filter((k) => k >= 0)
    return { display, correct: owned.length > 0 && owned.every((k) => matched[k]) }
  })
  const score = n === 0 ? 0 : matched.filter(Boolean).length / n
  return { words, score }
}

/** Similaridade simples (0..1) entre duas frases, usada no Roleplay. */
export function similarity(a: string, b: string): number {
  return compareSpeech(a, b).score
}

/** Compara duas frases ignorando pontuação/caixa (usado no modo "montar frase"). */
export function sameSentence(a: string, b: string): boolean {
  return tokenize(a).join(' ') === tokenize(b).join(' ')
}
