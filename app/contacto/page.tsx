import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import CTAFinal from '@/components/CTAFinal'
import { t } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Conversemos. Oficinas en Guayaquil y Miami.',
}

export default function ContactoPage() {
  const f = t.footer
  return (
    <>
      <section className="bg-gradient-to-b from-soft/60 to-white pt-36 pb-20">
        <div className="container-x">
          <Reveal>
            <p className="section-tag">Contacto</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="section-title mt-4 max-w-3xl">
              Hablemos sobre tu marca. <span className="text-deep">Te respondemos en 24h.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-slate-line bg-cream p-8">
              <h3 className="font-display text-xl font-bold text-slate-ink">{f.offices.gye.city}</h3>
              <p className="mt-2 text-sm text-slate">{f.offices.gye.line}</p>
              <a href={`mailto:${f.email}`} className="mt-4 block text-sm font-semibold text-deep">
                {f.email}
              </a>
              <a
                href={`tel:${f.phone.replace(/\s+/g, '')}`}
                className="block text-sm font-semibold text-slate-ink"
              >
                {f.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-slate-line bg-cream p-8">
              <h3 className="font-display text-xl font-bold text-slate-ink">{f.offices.mia.city}</h3>
              <p className="mt-2 text-sm text-slate">{f.offices.mia.line}</p>
              <a href={`mailto:${f.email}`} className="mt-4 block text-sm font-semibold text-deep">
                {f.email}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-10">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-slate-line">
              <iframe
                title="Mapa Stratix Guayaquil"
                src="https://www.google.com/maps?q=Guayaquil%2C%20Ecuador&output=embed"
                className="h-[360px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
