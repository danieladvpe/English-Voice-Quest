import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  UserPlus,
  Trophy,
  Flame,
  Zap,
  Check,
  Trash2,
  Pencil,
  Smartphone,
  Share2,
  Download,
} from 'lucide-react'
import { FAMILY_AVATARS, useGameStore } from '../store/useGameStore'
import { usePwaInstall } from '../lib/usePwaInstall'
import { sfx } from '../lib/sounds'

interface Props {
  open: boolean
  onClose: () => void
  initialTab?: 'profiles' | 'install'
}

export function FamilyProfilesModal({ open, onClose, initialTab = 'profiles' }: Props) {
  const game = useGameStore()
  const { canPrompt, isInstalled, triggerInstall } = usePwaInstall()
  const [tab, setTab] = useState<'profiles' | 'install'>(initialTab)
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState<string>(FAMILY_AVATARS[0])
  const [showManualAndroidHelp, setShowManualAndroidHelp] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)

  // Ordena ranking familiar por XP
  const rankedProfiles = [...game.profiles].sort((a, b) => b.xp - a.xp || b.streak - a.streak)

  function startAdd() {
    sfx.tap()
    setEditingId(null)
    setName('')
    const usedAvatars = new Set(game.profiles.map((p) => p.avatar))
    const nextAvatar = FAMILY_AVATARS.find((a) => !usedAvatars.has(a)) ?? FAMILY_AVATARS[0]
    setAvatar(nextAvatar)
    setIsAdding(true)
  }

  function startEdit(profileId: string, currentName: string, currentAvatar: string) {
    sfx.tap()
    setIsAdding(false)
    setEditingId(profileId)
    setName(currentName)
    setAvatar(currentAvatar)
  }

  function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    sfx.correct()
    if (editingId) {
      game.updateProfileInfo(editingId, name, avatar)
      setEditingId(null)
    } else {
      game.addProfile(name, avatar)
      setIsAdding(false)
    }
    setName('')
  }

  async function handleInstallClick() {
    sfx.tap()
    const res = await triggerInstall()
    if (res === 'manual') {
      setShowManualAndroidHelp(true)
    }
  }

  async function handleShareFamily() {
    sfx.tap()
    const shareUrl = window.location.href
    const shareData = {
      title: 'SpeakQuest - Inglês em Família',
      text: 'Vamos treinar inglês juntos no SpeakQuest! Abra o link no Chrome do seu Android e toque em "Instalar App":',
      url: shareUrl,
    }
    if (navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch {
        /* fallback para copiar link */
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2500)
    } catch {
      /* ignore */
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4"
        >
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-6"
          >
            {/* Cabeçalho */}
            <div className="flex items-center justify-between border-b-2 border-duo-gray pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{game.activeProfile.avatar}</span>
                <div>
                  <h2 className="text-lg font-extrabold text-duo-ink">SpeakQuest em Família</h2>
                  <p className="text-xs font-bold text-duo-gray-dark">
                    Jogando agora: <span className="text-duo-green">{game.activeProfile.name}</span>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar"
                className="rounded-xl p-2 text-duo-gray-dark hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Abas */}
            <div className="mt-4 grid grid-cols-2 gap-2 rounded-2xl bg-gray-100 p-1">
              <button
                type="button"
                onClick={() => {
                  sfx.tap()
                  setTab('profiles')
                }}
                className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-extrabold transition ${
                  tab === 'profiles' ? 'bg-white text-duo-green shadow-sm' : 'text-duo-gray-dark'
                }`}
              >
                <Trophy className="h-4 w-4" />
                Perfis & Ranking
              </button>
              <button
                type="button"
                onClick={() => {
                  sfx.tap()
                  setTab('install')
                }}
                className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-extrabold transition ${
                  tab === 'install' ? 'bg-white text-duo-blue shadow-sm' : 'text-duo-gray-dark'
                }`}
              >
                <Smartphone className="h-4 w-4" />
                App Android
              </button>
            </div>

            {tab === 'profiles' ? (
              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-duo-gray-dark">
                    Toque em quem vai praticar agora
                  </p>
                  {!isAdding && !editingId && (
                    <button
                      type="button"
                      onClick={startAdd}
                      className="flex items-center gap-1.5 rounded-xl bg-duo-green/15 px-3 py-1.5 text-xs font-extrabold uppercase text-duo-green-dark hover:bg-duo-green/25"
                    >
                      <UserPlus className="h-4 w-4" />
                      Novo Familiar
                    </button>
                  )}
                </div>

                {/* Formulário Adicionar / Editar Perfil */}
                {(isAdding || editingId) && (
                  <form
                    onSubmit={handleSaveProfile}
                    className="space-y-3 rounded-2xl border-2 border-duo-blue bg-duo-blue/5 p-4"
                  >
                    <p className="text-sm font-extrabold text-duo-blue">
                      {editingId ? 'Editar perfil familiar' : 'Adicionar membro da família'}
                    </p>
                    <div>
                      <label className="block text-xs font-bold uppercase text-duo-gray-dark">Nome ou Apelido</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex.: Daniel, Esposa, Filho..."
                        maxLength={22}
                        autoFocus
                        className="mt-1 w-full rounded-xl border-2 border-duo-gray bg-white px-3 py-2 text-base font-bold text-duo-ink focus:border-duo-blue focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-duo-gray-dark">Escolha um Avatar</label>
                      <div className="mt-1.5 flex flex-wrap gap-2">
                        {FAMILY_AVATARS.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setAvatar(item)}
                            className={`flex h-10 w-10 items-center justify-center rounded-xl border-2 text-xl transition ${
                              avatar === item
                                ? 'border-duo-blue bg-duo-blue/15 scale-105'
                                : 'border-duo-gray bg-white hover:bg-gray-50'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setIsAdding(false)
                          setEditingId(null)
                        }}
                        className="rounded-xl px-4 py-2 text-xs font-extrabold uppercase text-duo-gray-dark hover:bg-gray-200"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="btn-3d bg-duo-green px-5 py-2 text-xs text-white shadow-[0_3px_0_var(--color-duo-green-dark)]"
                      >
                        Salvar
                      </button>
                    </div>
                  </form>
                )}

                {/* Lista de Perfis / Ranking */}
                <div className="space-y-2.5">
                  {rankedProfiles.map((profile, idx) => {
                    const isActive = profile.id === game.activeProfile.id
                    const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}º`
                    return (
                      <div
                        key={profile.id}
                        onClick={() => {
                          sfx.tap()
                          game.switchProfile(profile.id)
                        }}
                        className={`flex cursor-pointer items-center justify-between rounded-2xl border-2 p-3.5 transition ${
                          isActive
                            ? 'border-duo-green bg-duo-green/10'
                            : 'border-duo-gray bg-white hover:border-duo-gray-dark'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 text-center text-base font-extrabold">{medal}</span>
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm border border-duo-gray">
                            {profile.avatar}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-extrabold text-duo-ink">{profile.name}</p>
                              {isActive && (
                                <span className="inline-flex items-center gap-0.5 rounded-full bg-duo-green px-2 py-0.5 text-[10px] font-extrabold uppercase text-white">
                                  <Check className="h-3 w-3" strokeWidth={3} /> Ativo
                                </span>
                              )}
                            </div>
                            <div className="mt-0.5 flex items-center gap-3 text-xs font-extrabold">
                              <span className="flex items-center gap-1 text-duo-gold-dark">
                                <Zap className="h-3.5 w-3.5 fill-duo-gold text-duo-gold" />
                                {profile.xp} XP
                              </span>
                              <span className="flex items-center gap-1 text-duo-orange">
                                <Flame className="h-3.5 w-3.5 fill-duo-orange text-duo-orange" />
                                {profile.streak} dias
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                          <button
                            type="button"
                            title="Editar nome ou avatar"
                            onClick={() => startEdit(profile.id, profile.name, profile.avatar)}
                            className="rounded-xl p-2 text-duo-gray-dark hover:bg-gray-100 hover:text-duo-ink"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                          {game.profiles.length > 1 && (
                            <button
                              type="button"
                              title="Excluir perfil"
                              onClick={() => {
                                if (confirm(`Remover o perfil de "${profile.name}" deste aparelho?`)) {
                                  game.deleteProfile(profile.id)
                                }
                              }}
                              className="rounded-xl p-2 text-duo-gray-dark hover:bg-red-50 hover:text-duo-red"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : (
              /* Aba de Instalação no Android e Compartilhamento com a Família */
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border-2 border-duo-green bg-duo-green/10 p-4">
                  <div className="flex items-start gap-3">
                    <Smartphone className="h-8 w-8 shrink-0 text-duo-green" />
                    <div>
                      <h3 className="font-extrabold text-duo-ink">
                        {isInstalled ? 'Aplicativo já instalado neste aparelho!' : 'Instalar como App no Android'}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-duo-gray-dark">
                        {isInstalled
                          ? 'Você já está rodando o SpeakQuest em modo aplicativo de tela cheia.'
                          : 'Instale o SpeakQuest na tela inicial do seu Android para abrir em tela cheia, com ícone próprio e acesso offline.'}
                      </p>
                    </div>
                  </div>

                  {!isInstalled && (
                    <button
                      type="button"
                      onClick={handleInstallClick}
                      className="btn-3d mt-4 flex w-full items-center justify-center gap-2 bg-duo-green py-3 text-sm text-white shadow-[0_4px_0_var(--color-duo-green-dark)]"
                    >
                      <Download className="h-5 w-5" />
                      {canPrompt ? 'Instalar Aplicativo Agora' : 'Como Instalar no Android'}
                    </button>
                  )}

                  {(showManualAndroidHelp || !canPrompt) && !isInstalled && (
                    <div className="mt-3 rounded-xl bg-white p-3 text-xs font-semibold text-duo-ink">
                      <p className="font-extrabold uppercase text-duo-green-dark">Passo a passo no Chrome Android:</p>
                      <ol className="mt-1.5 list-decimal space-y-1 pl-4">
                        <li>
                          Toque nos <strong>3 pontinhos (⋮)</strong> no canto superior direito do Chrome.
                        </li>
                        <li>
                          Toque em <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.
                        </li>
                        <li>Confirme em <strong>Instalar</strong> — o ícone do SpeakQuest aparecerá junto aos seus apps!</li>
                      </ol>
                    </div>
                  )}
                </div>

                {/* Compartilhar com a família no WhatsApp */}
                <div className="rounded-2xl border-2 border-duo-gray p-4">
                  <h3 className="font-extrabold text-duo-ink">Enviar para os celulares da família</h3>
                  <p className="mt-1 text-xs font-semibold text-duo-gray-dark">
                    Cada pessoa da família pode instalar no próprio celular Android, ou vocês podem usar juntos no mesmo
                    aparelho trocando o perfil na aba <strong>Perfis & Ranking</strong>!
                  </p>
                  <button
                    type="button"
                    onClick={handleShareFamily}
                    className="btn-3d mt-3 flex w-full items-center justify-center gap-2 bg-duo-blue py-3 text-sm text-white shadow-[0_4px_0_var(--color-duo-blue-dark)]"
                  >
                    <Share2 className="h-5 w-5" />
                    {copiedLink ? 'Link copiado! Cole no WhatsApp' : 'Compartilhar com a Família (WhatsApp)'}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
