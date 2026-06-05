'use client'

import { useMemo } from 'react'
import { useLanguage } from '@/lib/i18n'

export default function ServicesMarquee() {
  const { services } = useLanguage()
  // Random start offset prevents a visible reset at 0%. Same seed per page load.
  const startOffset = useMemo(() => -(Math.random() * 45 + 5), [])
  const items = [...services, ...services]

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
