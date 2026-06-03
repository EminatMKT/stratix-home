import Link from 'next/link'
import type { Metadata } from 'next'
import { SERVICES } from '@/lib/services'
import ServiceIcon from '@/components/ServiceIcon'
import Reveal from '@/components/Reveal'
import CTAFinal from '@/components/CTAFinal'

export const metadata: Metadata = {
  title: 'Servicios',
  description: '11 servicios integrados de marketing, diseño, web, datos y tecnología.',
}

export default function ServiciosIndex() {
  return (
    <>
      <section className="bg-gradient-to-b from-soft/60 to-white pt-36 pb-20">
        <div className="container-x">
          <Reveal>
            <p className="section-tag">Servicios</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="section-title mt-4 max-w-4xl">
              Un equipo de marketing completo, <span className="text-deep">a tu medida.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub mt-5">
              Cada servicio funciona solo o integrado al sistema completo. Tú eliges qué piezas
              activar según el momento de tu marca.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
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
                  Ver detalle →
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
