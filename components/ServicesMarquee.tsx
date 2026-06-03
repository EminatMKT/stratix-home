'use client'

import { useMemo } from 'react'
import { SERVICES } from '@/lib/services'

export default function ServicesMarquee() {
  // Start from a random offset so the marquee never visibly resets at 0%.
  const startOffset = useMemo(() => -(Math.random() * 45 + 5), [])
  const items = [...SERVICES, ...SERVICES] // duplicated for seamless loop

  return (
    <div className="border-y border-slate-line bg-mist/40 py-7 overflow-hidden">
      <div
        className="marquee-track flex items-center gap-12"
        style={{ ['--marquee-start' as string]: `${startOffset}%` }}
      >
        {items.map((s, i) => (
          <span
            key={`${s.slug}-${i}`}
            className="flex items-center gap-4 text-base font-semibold text-slate-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo" />
            <span className="whitespace-nowrap">{s.title}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
