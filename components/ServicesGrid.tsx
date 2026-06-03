'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/services'
import ServiceIcon from './ServiceIcon'
import Reveal from './Reveal'

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="section-tag">Servicios</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title mt-4 max-w-3xl">
            11 servicios integrados <span className="text-deep">bajo un solo equipo</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub mt-5">
            Trabajamos como tu departamento de marketing externo: estrategia, creatividad, paid,
            web, datos y tecnología en un solo lugar.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            >
              <Link
                href={`/servicios/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-line bg-white p-7 transition hover:-translate-y-1 hover:border-deep/30 hover:shadow-lift"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-soft/70 text-deep transition group-hover:bg-deep group-hover:text-white">
                  <ServiceIcon iconKey={s.iconKey} />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-slate-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-deep">
                  Ver más
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
