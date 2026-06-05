'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'
import ServiceIcon from '@/components/ServiceIcon'
import Reveal from '@/components/Reveal'
import CTAFinal from '@/components/CTAFinal'

export default function ServiceDetailBody({ slug }: { slug: string }) {
  const { t, services } = useLanguage()
  const service = services.find((s) => s.slug === slug)
  const p = t.pages.serviceDetail

  if (!service) {
    return (
      <section className="container-x py-40">
        <p className="section-tag">{p.notFound}</p>
      </section>
    )
  }

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white pt-36 pb-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal>
              <Link href="/servicios" className="text-sm font-semibold text-indigo">
                {p.back}
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="section-title mt-6 max-w-3xl">{service.title}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="section-sub mt-5">{service.description}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contacto" className="btn-primary">
                  {p.cta1} →
                </Link>
                <Link href="/servicios" className="btn-secondary">
                  {p.cta2}
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <span className="hidden h-24 w-24 place-items-center rounded-3xl bg-white text-indigo shadow-card lg:grid">
              <ServiceIcon iconKey={service.iconKey} className="h-12 w-12" />
            </span>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="section-tag">{p.includesTag}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-slate-ink md:text-4xl">
                {p.includesTitle}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate">
                {p.includesIntroPre} <span className="font-semibold">{service.title}</span>
                {p.includesIntroPost}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-3 rounded-2xl border border-slate-line bg-mist/40 p-8">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-ink">
                  <span className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-indigo/20 text-indigo">
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                      <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.8" fill="none" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist/40 py-24">
        <div className="container-x">
          <Reveal>
            <p className="section-tag">{p.related}</p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-line bg-white p-7 transition hover:-translate-y-1 hover:shadow-glow"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-indigo">
                  <ServiceIcon iconKey={s.iconKey} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-slate-ink">{s.title}</h3>
                <p className="mt-1 text-sm text-slate">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
