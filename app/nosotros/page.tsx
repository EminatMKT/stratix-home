import type { Metadata } from 'next'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import ValueProp from '@/components/ValueProp'
import Stats from '@/components/Stats'
import CTAFinal from '@/components/CTAFinal'

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Quiénes somos: agencia con talento Ecuador y presencia Miami.',
}

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-soft/60 to-white pt-36 pb-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <p className="section-tag">Nosotros</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="section-title mt-4">
                Somos un equipo de marketing <span className="text-deep">creativo y estratégico</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="section-sub mt-5">
                Stratix nace dentro de Eminat Holding con un objetivo claro: ofrecer marketing
                integrado de calidad internacional con talento ecuatoriano y operación
                bicontinental entre Guayaquil y Miami.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                alt="Equipo Stratix"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ValueProp />
      <Stats />
      <CTAFinal />
    </>
  )
}
