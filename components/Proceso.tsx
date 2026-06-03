import { t } from '@/lib/content'
import Reveal from './Reveal'

export default function Proceso() {
  const p = t.process
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="section-tag">{p.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title mt-4 max-w-3xl">{p.title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {p.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl border border-slate-line bg-cream p-7">
                <span className="font-display text-5xl font-extrabold text-teal/40">{s.n}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.desc}</p>
                {i < p.steps.length - 1 && (
                  <span className="absolute right-5 top-9 hidden text-teal lg:block">
                    <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden>
                      <path d="M1 7h18m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none" />
                    </svg>
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
