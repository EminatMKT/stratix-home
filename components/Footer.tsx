import Link from 'next/link'
import { t } from '@/lib/content'
import { SERVICES } from '@/lib/services'
import { CLIENTS } from '@/lib/clients'
import Logo from './Logo'

export default function Footer() {
  const f = t.footer
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" className="!text-3xl" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">{f.tagline}</p>
            <div className="mt-6 flex gap-3">
              <SocialIcon
                href={f.linkedin}
                label="LinkedIn"
                path="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.3 18.3H5.7v-8h2.6v8zM7 9.2A1.5 1.5 0 117 6.2a1.5 1.5 0 010 3zM18.3 18.3h-2.6V14c0-1-.4-1.7-1.4-1.7-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.7v4.3h-2.6s0-7.3 0-8h2.6v1.1c.3-.5 1-1.3 2.5-1.3 1.8 0 3.1 1.2 3.1 3.6v4.6z"
              />
            </div>
          </div>

          <FooterCol title={f.colServices}>
            {SERVICES.slice(0, 6).map((s) => (
              <FooterLink key={s.slug} href={`/servicios/${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
            <FooterLink href="/servicios">Ver todos →</FooterLink>
          </FooterCol>

          <FooterCol title={f.colCompany}>
            <FooterLink href="/nosotros">Nosotros</FooterLink>
            <FooterLink href="/clientes">Clientes</FooterLink>
            <FooterLink href="/precios">Precios</FooterLink>
            <FooterLink href="/contacto">Contacto</FooterLink>
          </FooterCol>

          <FooterCol title={f.colHolding}>
            {CLIENTS.map((c) => (
              <span key={c.name} className="block py-1 text-sm text-white/65">
                {c.name}
              </span>
            ))}
          </FooterCol>

          <FooterCol title={f.colContact}>
            <div className="space-y-4 text-sm text-white/70">
              <div>
                <div className="font-semibold text-white">{f.offices.gye.city}</div>
                <div className="text-white/60">{f.offices.gye.line}</div>
              </div>
              <div>
                <div className="font-semibold text-white">{f.offices.mia.city}</div>
                <div className="text-white/60">{f.offices.mia.line}</div>
              </div>
              <a href={`mailto:${f.email}`} className="block text-indigo-300 hover:text-indigo-200">
                {f.email}
              </a>
              <a href={`tel:${f.phone.replace(/[^\d+]/g, '')}`} className="block text-white/70">
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
