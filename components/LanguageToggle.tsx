'use client'

import { useLanguage, type Locale } from '@/lib/i18n'

type Variant = 'navbar' | 'mobile'

export default function LanguageToggle({ variant = 'navbar' }: { variant?: Variant }) {
  const { lang, setLang } = useLanguage()

  const baseTrack =
    variant === 'navbar'
      ? 'border-white/20 bg-white/5'
      : 'border-white/25 bg-white/10'

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-0.5 rounded-full border p-0.5 text-[11px] font-bold tracking-[0.18em] ${baseTrack}`}
    >
      {(['en', 'es'] as const).map((l) => (
        <button
          key={l}
          type="button"
          aria-pressed={lang === l}
          onClick={() => setLang(l as Locale)}
          className={`rounded-full px-2.5 py-1 uppercase transition ${
            lang === l
              ? 'bg-indigo text-white shadow-card'
              : 'text-white/65 hover:text-white'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
