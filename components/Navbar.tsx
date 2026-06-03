'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { t } from '@/lib/content'
import { SERVICES } from '@/lib/services'
import ServiceIcon from './ServiceIcon'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 shadow-[0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur'
          : 'bg-navy'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Logo variant="light" />

        <nav className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-semibold text-white/85 transition hover:text-white"
              onClick={() => setServicesOpen((v) => !v)}
            >
              {t.nav.services}
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="grid w-[640px] grid-cols-2 gap-1 rounded-2xl border border-slate-line bg-white p-3 shadow-lift">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicios/${s.slug}`}
                      className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-mist/60"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-mist text-indigo">
                        <ServiceIcon iconKey={s.iconKey} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-slate-ink group-hover:text-indigo">
                          {s.title}
                        </span>
                        <span className="block text-xs text-slate-mute">{s.short}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/clientes" className="text-sm font-semibold text-white/85 hover:text-white">
            {t.nav.clients}
          </Link>
          <Link href="/nosotros" className="text-sm font-semibold text-white/85 hover:text-white">
            {t.nav.about}
          </Link>
          <Link href="/contacto" className="text-sm font-semibold text-white/85 hover:text-white">
            {t.nav.contact}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://app.stratixsolutions.us"
            className="inline-flex items-center gap-1 text-sm font-semibold text-white/85 transition hover:text-white"
          >
            {t.nav.systemCta} →
          </a>
          <Link href="/contacto" className="btn-primary">
            {t.nav.bookCta}
          </Link>
        </div>

        <button
          aria-label="Abrir menú"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 lg:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
            <path d="M3 6h14M3 10h14M3 14h14" stroke="#ffffff" strokeWidth="1.6" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-navy px-6 py-6 text-white lg:hidden">
          <div className="flex items-center justify-between">
            <Logo variant="light" />
            <button
              aria-label="Cerrar menú"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/20"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
                <path d="M3 3l12 12M15 3 3 15" stroke="#ffffff" strokeWidth="1.6" />
              </svg>
            </button>
          </div>

          <nav className="mt-8 flex flex-1 flex-col gap-1 overflow-y-auto">
            <details className="group border-b border-white/10 py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-xl font-bold">
                {t.nav.services}
                <span className="text-2xl text-indigo transition group-open:rotate-45">+</span>
              </summary>
              <div className="mt-2 grid gap-1 pb-3">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/servicios/${s.slug}`}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-white/80"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-md bg-white/10 text-indigo">
                      <ServiceIcon iconKey={s.iconKey} className="h-4 w-4" />
                    </span>
                    {s.title}
                  </Link>
                ))}
              </div>
            </details>
            {[
              { href: '/clientes', label: t.nav.clients },
              { href: '/nosotros', label: t.nav.about },
              { href: '/contacto', label: t.nav.contact },
              { href: '/precios', label: t.nav.pricing },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-white/10 py-4 text-xl font-bold"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contacto"
              className="btn-primary w-full"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.bookCta}
            </Link>
            <a
              href="https://app.stratixsolutions.us"
              className="inline-flex items-center justify-center gap-1 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
            >
              {t.nav.systemCta} →
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
