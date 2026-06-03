import { t } from '@/lib/content'
import Reveal from './Reveal'

export default function ValueProp() {
  const v = t.valueProp
  return (
    <section className="bg-deep py-24 text-white md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{v.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            {v.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {v.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-teal/40 hover:bg-white/10">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal/20 text-teal font-display text-base font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
