import type { Metadata } from 'next'
import Clientes from '@/components/Clientes'
import CTAFinal from '@/components/CTAFinal'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Clientes',
  description: 'Marcas del holding Eminat y clientes externos que confían en Stratix.',
}

export default function ClientesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-soft/60 to-white pt-36 pb-12">
        <div className="container-x">
          <Reveal>
            <p className="section-tag">Clientes</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="section-title mt-4 max-w-3xl">
              Marcas que <span className="text-deep">crecen con nosotros.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub mt-5">
              Trabajamos para marcas del holding Eminat y para clientes externos en salud,
              tecnología, educación y servicios profesionales en LATAM y EE.UU.
            </p>
          </Reveal>
        </div>
      </section>
      <Clientes />
      <CTAFinal />
    </>
  )
}
