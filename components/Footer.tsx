'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'
import Logo from './Logo'

// Glifos sólidos 24x24. Agregar una red = una entrada acá + su URL en content.ts.
const SOCIAL_PATHS = {
  linkedin:
    'M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.3 18.3H5.7v-8h2.6v8zM7 9.2A1.5 1.5 0 117 6.2a1.5 1.5 0 010 3zM18.3 18.3h-2.6V14c0-1-.4-1.7-1.4-1.7-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.7v4.3h-2.6s0-7.3 0-8h2.6v1.1c.3-.5 1-1.3 2.5-1.3 1.8 0 3.1 1.2 3.1 3.6v4.6z',
  instagram:
    'M12 2.2c3.2 0 3.6 0 4.9.07 1.18.06 1.8.25 2.23.42.56.22.96.48 1.38.9.43.43.7.83.9 1.4.17.42.37 1.04.43 2.23.06 1.27.07 1.65.07 4.88s-.01 3.6-.07 4.88c-.06 1.19-.26 1.8-.43 2.23a3.8 3.8 0 01-.9 1.4c-.42.42-.82.68-1.38.9-.43.17-1.05.36-2.23.42-1.27.06-1.65.07-4.9.07s-3.62-.01-4.9-.07c-1.18-.06-1.8-.25-2.23-.42a3.8 3.8 0 01-1.38-.9 3.8 3.8 0 01-.9-1.4c-.17-.42-.37-1.04-.43-2.23C2.2 15.6 2.2 15.23 2.2 12s.01-3.6.07-4.88c.06-1.19.26-1.8.43-2.23.22-.56.48-.97.9-1.4.42-.42.82-.68 1.38-.9.43-.17 1.05-.36 2.23-.42C8.38 2.2 8.76 2.2 12 2.2zm0 6a3.8 3.8 0 100 7.6 3.8 3.8 0 000-7.6zm0 6.27a2.47 2.47 0 110-4.94 2.47 2.47 0 010 4.94zM17.14 6a.9.9 0 11-1.8 0 .9.9 0 011.8 0z',
} as const

export default function Footer() {
  const { t, services, clients } = useLanguage()
  const f = t.footer
  const telHref = `tel:${f.phone.replace(/[^\d+]/g, '')}`

  return (
    <footer className="bg-navy text-white/80">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" className="!text-3xl" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">{f.tagline}</p>
            <div className="mt-6 flex gap-3">
              {[
                { href: f.linkedin, label: 'LinkedIn', path: SOCIAL_PATHS.linkedin },
                { href: f.instagram, label: 'Instagram', path: SOCIAL_PATHS.instagram },
              ].map((s) => (
                <SocialIcon key={s.label} href={s.href} label={s.label} path={s.path} />
              ))}
            </div>
          </div>

          <FooterCol title={f.colServices}>
            {services.slice(0, 6).map((s) => (
              <FooterLink key={s.slug} href={`/servicios/${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
            <FooterLink href="/servicios">{f.viewAll} →</FooterLink>
          </FooterCol>

          <FooterCol title={f.colCompany}>
            <FooterLink href="/nosotros">{t.nav.about}</FooterLink>
            <FooterLink href="/clientes">{t.nav.clients}</FooterLink>
            <FooterLink href="/precios">{t.nav.pricing}</FooterLink>
            <FooterLink href="/contacto">{t.nav.contact}</FooterLink>
          </FooterCol>

          <FooterCol title={f.colHolding}>
            {clients.map((c) => (
              <span key={c.name} className="block py-1 text-sm text-white/65">
                {c.name}
              </span>
            ))}
          </FooterCol>

          <FooterCol title={f.colContact}>
            <div className="space-y-4 text-sm text-white/70">
              <div>
                <div className="font-semibold text-white">{f.offices.mia.city}</div>
                <div className="text-white/60">{f.offices.mia.line}</div>
              </div>
              <div>
                <div className="font-semibold text-white">{f.offices.gye.city}</div>
                <div className="text-white/60">{f.offices.gye.line}</div>
              </div>
              <a href={`mailto:${f.email}`} className="block text-indigo-300 hover:text-indigo-200">
                {f.email}
              </a>
              <a href={telHref} className="block text-white/70">
                {f.phone}
              </a>
            </div>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center">
          <span>{f.poweredBy}</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">
              {f.privacy}
            </Link>
            <Link href="#" className="hover:text-white">
              {f.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/40">{title}</h4>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-white/65 transition hover:text-white">
      {children}
    </Link>
  )
}

function SocialIcon({ href, label, path }: { href: string; label: string; path: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-indigo hover:text-indigo"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d={path} />
      </svg>
    </a>
  )
}
