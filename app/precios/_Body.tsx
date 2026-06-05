'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'
import Reveal from '@/components/Reveal'

export default function PreciosPageBody() {
  const { t } = useLanguage()
  const p = t.pages.precios
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-mist to-white pt-36 pb-24">
      <div className="container-x">
        <Reveal>
          <p className="section-tag">{p.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="section-title mt-4 max-w-3xl">{p.h1}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub mt-5">{p.sub}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-primary">
              {p.cta1} →
            </Link>
            <Link href="/servicios" className="btn-secondary">
              {p.cta2}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
