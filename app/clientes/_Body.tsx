'use client'

import { useLanguage } from '@/lib/i18n'
import Clientes from '@/components/Clientes'
import CTAFinal from '@/components/CTAFinal'
import Reveal from '@/components/Reveal'

export default function ClientesPageBody() {
  const { t } = useLanguage()
  const p = t.pages.clientesPage
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white pt-36 pb-12">
        <div className="container-x">
          <Reveal>
            <p className="section-tag">{p.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="section-title mt-4 max-w-3xl">
              {p.h1Pre} <span className="text-indigo">{p.h1Hi}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub mt-5">{p.sub}</p>
          </Reveal>
        </div>
      </section>
      <Clientes />
      <CTAFinal />
    </>
  )
}
