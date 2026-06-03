import { t } from '@/lib/content'
import { CLIENTS } from '@/lib/clients'
import Reveal from './Reveal'

export default function Clientes() {
  const c = t.clients
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="section-tag">{c.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title mt-4 max-w-3xl">{c.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub mt-5">{c.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CLIENTS.map((cl, i) => (
            <Reveal key={cl.name} delay={(i % 4) * 0.06}>
              <div className="group h-full overflow-hidden rounded-2xl border border-slate-line bg-white transition hover:-translate-y-1 hover:shadow-lift">
                <div
                  className="relative h-28 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${cl.color} 0%, ${cl.color}cc 100%)` }}
                >
                  <span className="absolute inset-0 grid place-items-center font-display text-2xl font-extrabold text-white drop-shadow">
                    {cl.name.split(' ').map((w) => w[0]).slice(0, 3).join('')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-mute">
                    {cl.tag}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-slate-ink">{cl.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{cl.result}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
