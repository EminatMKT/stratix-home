import type { ServiceIconKey } from '@/lib/services'

type Props = {
  iconKey: ServiceIconKey
  className?: string
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export default function ServiceIcon({ iconKey, className }: Props) {
  const cls = className ?? 'h-7 w-7'
  switch (iconKey) {
    case 'brand':
      return (
        <svg viewBox="0 0 32 32" className={cls} aria-hidden>
          <circle cx="16" cy="16" r="10" {...stroke} />
          <path d="M16 6v20M6 16h20" {...stroke} />
        </svg>
      )
    case 'digital':
      return (
        <svg viewBox="0 0 32 32" className={cls} aria-hidden>
          <rect x="4" y="6" width="24" height="16" rx="2" {...stroke} />
          <path d="M10 26h12M16 22v4" {...stroke} />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 32 32" className={cls} aria-hidden>
          <rect x="5" y="5" width="22" height="22" rx="3" {...stroke} />
          <path d="M10 14v8M10 11v.01M14 22v-5a3 3 0 0 1 6 0v5M14 14v8" {...stroke} />
        </svg>
      )
    case 'paid':
      return (
        <svg viewBox="0 0 32 32" className={cls} aria-hidden>
          <path d="M4 22l6-6 5 5 9-11" {...stroke} />
          <path d="M18 10h6v6" {...stroke} />
        </svg>
      )
    case 'design':
      return (
        <svg viewBox="0 0 32 32" className={cls} aria-hidden>
          <path d="M6 22l10-14 10 14H6z" {...stroke} />
          <circle cx="16" cy="22" r="2.5" {...stroke} />
        </svg>
      )
    case 'motion':
      return (
        <svg viewBox="0 0 32 32" className={cls} aria-hidden>
          <rect x="4" y="6" width="24" height="20" rx="2" {...stroke} />
          <path d="M14 12l8 4-8 4v-8z" {...stroke} />
        </svg>
      )
    case 'seo':
      return (
        <svg viewBox="0 0 32 32" className={cls} aria-hidden>
          <circle cx="14" cy="14" r="7" {...stroke} />
          <path d="M19 19l8 8" {...stroke} />
        </svg>
      )
    case 'web':
      return (
        <svg viewBox="0 0 32 32" className={cls} aria-hidden>
          <rect x="4" y="6" width="24" height="18" rx="2" {...stroke} />
          <path d="M4 11h24M8 8v.01M12 8v.01" {...stroke} />
        </svg>
      )
    case 'btl':
      return (
        <svg viewBox="0 0 32 32" className={cls} aria-hidden>
          <path d="M6 26V14l10-8 10 8v12" {...stroke} />
          <path d="M12 26v-7h8v7" {...stroke} />
        </svg>
      )
    case 'data':
      return (
        <svg viewBox="0 0 32 32" className={cls} aria-hidden>
          <path d="M6 26V12M14 26V6M22 26v-9" {...stroke} />
          <path d="M4 26h24" {...stroke} />
        </svg>
      )
    case 'stratix':
      return (
        <svg viewBox="0 0 32 32" className={cls} aria-hidden>
          <path d="M6 12l10-6 10 6-10 6L6 12z" {...stroke} />
          <path d="M6 20l10 6 10-6" {...stroke} />
        </svg>
      )
    default:
      return null
  }
}
