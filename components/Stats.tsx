'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { t } from '@/lib/content'

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()
  const [val, setVal] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, to])

  return (
    <span ref={ref} className="font-display text-5xl font-extrabold text-white md:text-6xl">
      {val}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const items = t.stats.items
  return (
    <section className="relative overflow-hidden bg-deep">
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep to-teal-700" />
      <div className="container-x relative grid gap-10 py-20 md:grid-cols-4">
        {items.map((s) => (
          <div key={s.label} className="text-center">
            <Counter to={s.value} suffix={s.suffix} />
            <div className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-white/65">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
