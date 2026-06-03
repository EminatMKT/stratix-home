import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Precios',
  description: 'Planes y tarifas Stratix — próximamente.',
}

export default function PreciosPage() {
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-mist to-white pt-36 pb-24">
      <div className="container-x">
        <Reveal>
          <p className="section-tag">Precios</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="section-title mt-4 max-w-3xl">
            Estamos preparando nuestro tarifario público.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub mt-5">
            Mientras tanto, podemos enviarte una propuesta personalizada según el alcance de tu
            marca. La mayoría de planes parten desde paquetes mensuales o proyectos puntuales.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-primary">
              Solicitar propuesta →
            </Link>
            <Link href="/servicios" className="btn-secondary">
              Ver servicios
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
