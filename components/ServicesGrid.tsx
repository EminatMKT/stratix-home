'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n'
import ServiceIcon from './ServiceIcon'
import Reveal from './Reveal'

export default function ServicesGrid() {
  const { t, services } = useLanguage()
  const g = t.servicesGrid
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="section-tag">{g.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title mt-4 max-w-3xl">
            {g.titlePre} <span className="text-indigo">{g.titleHi}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub mt-5">{g.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            >
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
                  {g.cardCta}
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                    <path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" fill="none" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
