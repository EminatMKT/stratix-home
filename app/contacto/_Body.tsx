'use client'

import { useLanguage } from '@/lib/i18n'
import Reveal from '@/components/Reveal'
import CTAFinal from '@/components/CTAFinal'

const MIAMI_MAP =
  'https://www.google.com/maps?q=14601+SW+29th+Street,+Miramar,+FL+33027&output=embed'
const GUAYAQUIL_MAP =
  'https://www.google.com/maps?q=Av.+del+Bombero+Km+6.5,+Guayaquil,+Ecuador&output=embed'

export default function ContactoPageBody() {
  const { t } = useLanguage()
  const f = t.footer
  const p = t.pages.contacto
  const telHref = `tel:${f.phone.replace(/[^\d+]/g, '')}`

  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white pt-36 pb-20">
        <div className="container-x">
          <Reveal>
            <p className="section-tag">{p.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="section-title mt-4 max-w-3xl">
              {p.h1Pre} <span className="text-indigo">{p.h1Hi}</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-slate-line bg-mist/40 p-8">
              <h3 className="font-display text-xl font-bold text-slate-ink">
                {f.offices.mia.city}
              </h3>
              <p className="mt-2 text-sm text-slate">{f.offices.mia.line}</p>
              <a
                href={`mailto:${f.email}`}
                className="mt-4 block text-sm font-semibold text-indigo"
              >
                {f.email}
              </a>
              <a href={telHref} className="block text-sm font-semibold text-slate-ink">
                {f.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-slate-line bg-mist/40 p-8">
              <h3 className="font-display text-xl font-bold text-slate-ink">
                {f.offices.gye.city}
              </h3>
              <p className="mt-2 text-sm text-slate">{f.offices.gye.line}</p>
              <a
                href={`mailto:${f.email}`}
                className="mt-4 block text-sm font-semibold text-indigo"
              >
                {f.email}
              </a>
              <a href={telHref} className="block text-sm font-semibold text-slate-ink">
                {f.phone}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-10 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-slate-line">
              <iframe
                title={p.mapMiami}
                src={MIAMI_MAP}
                className="h-[360px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="overflow-hidden rounded-2xl border border-slate-line">
              <iframe
                title={p.mapGye}
                src={GUAYAQUIL_MAP}
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
