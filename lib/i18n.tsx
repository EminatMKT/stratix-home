'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { COPY_RAW } from './content'
import { SERVICES_RAW } from './services'
import { CLIENTS_RAW } from './clients'

export type Locale = 'en' | 'es'
export type LocalizedString = { en: string; es: string }

export type Localized<T> =
  T extends LocalizedString ? string
    : T extends readonly (infer U)[] ? Localized<U>[]
    : T extends object ? { -readonly [K in keyof T]: Localized<T[K]> }
    : T

function isLocalizedString(v: unknown): v is LocalizedString {
  if (!v || typeof v !== 'object') return false
  const o = v as Record<string, unknown>
  return (
    Object.keys(o).length === 2 &&
    typeof o.en === 'string' &&
    typeof o.es === 'string'
  )
}

function resolve<T>(node: T, lang: Locale): Localized<T> {
  if (node === null || node === undefined) return node as Localized<T>
  if (isLocalizedString(node)) return (node as LocalizedString)[lang] as Localized<T>
  if (Array.isArray(node)) return node.map((x) => resolve(x, lang)) as Localized<T>
  if (typeof node === 'object') {
    const out: Record<string, unknown> = {}
    for (const k of Object.keys(node as Record<string, unknown>)) {
      out[k] = resolve((node as Record<string, unknown>)[k], lang)
    }
    return out as Localized<T>
  }
  return node as Localized<T>
}

export type LocalizedCopy = Localized<typeof COPY_RAW>
export type LocalizedService = Localized<(typeof SERVICES_RAW)[number]>
export type LocalizedClient = Localized<(typeof CLIENTS_RAW)[number]>

type LanguageContextValue = {
  lang: Locale
  setLang: (l: Locale) => void
  t: LocalizedCopy
  services: LocalizedService[]
  clients: LocalizedClient[]
}

const Ctx = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'stratix-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>('en')

  // Hydrate from localStorage after mount (default stays 'en' to match SSR).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === 'en' || stored === 'es') setLangState(stored)
    } catch {
      /* ignore (private mode, SSR) */
    }
  }, [])

  // Persist + sync <html lang> on every change.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang: setLangState,
      t: resolve(COPY_RAW, lang),
      services: resolve(SERVICES_RAW, lang) as LocalizedService[],
      clients: resolve(CLIENTS_RAW, lang) as LocalizedClient[],
    }),
    [lang],
  )

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLanguage must be used within <LanguageProvider>')
  return ctx
}
