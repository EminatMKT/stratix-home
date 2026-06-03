import Link from 'next/link'

type Props = {
  variant?: 'light' | 'dark'
  href?: string | null
  className?: string
}

export default function Logo({ variant = 'light', href = '/', className }: Props) {
  const text = variant === 'light' ? 'text-white' : 'text-slate-ink'
  const sub = variant === 'light' ? 'text-white/55' : 'text-slate-mute'

  const inner = (
    <span className={`flex flex-col leading-none ${className ?? ''}`}>
      <span className={`font-display text-2xl font-extrabold tracking-tight ${text}`}>
        Stratix<span className="text-indigo">.</span>
      </span>
      <span
        className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] ${sub}`}
      >
        Communications
      </span>
    </span>
  )

  if (!href) return inner
  return <Link href={href}>{inner}</Link>
}
