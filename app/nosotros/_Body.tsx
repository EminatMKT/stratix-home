'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'
import Reveal from '@/components/Reveal'
import ValueProp from '@/components/ValueProp'
import Stats from '@/components/Stats'
import CTAFinal from '@/components/CTAFinal'

export default function NosotrosPageBody() {
  const { t } = useLanguage()
  const p = t.pages.nosotros
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white pt-36 pb-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <p className="section-tag">{p.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="section-title mt-4">
                {p.h1Pre} <span className="text-indigo">{p.h1Hi}</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="section-sub mt-5">{p.sub}</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                alt={p.imageAlt}
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
