'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'
import ServiceIcon from '@/components/ServiceIcon'
import Reveal from '@/components/Reveal'
import CTAFinal from '@/components/CTAFinal'

export default function ServiciosPageBody() {
  const { t, services } = useLanguage()
  const p = t.pages.services
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white pt-36 pb-20">
        <div className="container-x">
          <Reveal>
            <p className="section-tag">{p.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="section-title mt-4 max-w-4xl">
              {p.h1Pre} <span className="text-indigo">{p.h1Hi}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub mt-5">{p.sub}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/servicios/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-line bg-white p-7 transition hover:-translate-y-1 hover:border-indigo/40 hover:shadow-glow"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-mist text-indigo transition group-hover:bg-indigo group-hover:text-white">
                  <ServiceIcon iconKey={s.iconKey} />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-slate-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-indigo">
                  {p.cardCta} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
