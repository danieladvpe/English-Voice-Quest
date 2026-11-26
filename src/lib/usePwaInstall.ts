import { useEffect, useState } from 'react'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
  prompt(): Promise<void>
}

let deferredPromptGlobal: BeforeInstallPromptEvent | null = null
const promptListeners = new Set<() => void>()

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPromptGlobal = e as BeforeInstallPromptEvent
    promptListeners.forEach((l) => l())
  })
  window.addEventListener('appinstalled', () => {
    deferredPromptGlobal = null
    promptListeners.forEach((l) => l())
  })
}

function isStandaloneMode(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  )
}

export function usePwaInstall() {
  const [canPrompt, setCanPrompt] = useState<boolean>(() => !!deferredPromptGlobal)
  const [isInstalled, setIsInstalled] = useState<boolean>(() => isStandaloneMode())

  useEffect(() => {
    const update = () => {
      setCanPrompt(!!deferredPromptGlobal)
      setIsInstalled(isStandaloneMode())
    }
    promptListeners.add(update)
    const mq = window.matchMedia('(display-mode: standalone)')
    mq.addEventListener?.('change', update)
    return () => {
      promptListeners.delete(update)
      mq.removeEventListener?.('change', update)
    }
  }, [])

  async function triggerInstall(): Promise<'accepted' | 'dismissed' | 'manual'> {
    if (!deferredPromptGlobal) return 'manual'
    await deferredPromptGlobal.prompt()
    const choice = await deferredPromptGlobal.userChoice
    if (choice.outcome === 'accepted') {
      deferredPromptGlobal = null
      setCanPrompt(false)
    }
    return choice.outcome
  }

  return {
    canPrompt,
    isInstalled,
    triggerInstall,
  }
}
