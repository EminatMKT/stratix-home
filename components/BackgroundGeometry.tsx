type Variant = 'hero' | 'cta'

export default function BackgroundGeometry({ variant }: { variant: Variant }) {
  if (variant === 'hero') {
    return (
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {/* Diagonal slash bands echoing the roll-up's angled style */}
        <path
          d="M-100 720 L1540 200 L1540 270 L-100 790 Z"
          fill="white"
          fillOpacity="0.04"
        />
        <path
          d="M-100 560 L1540 100 L1540 132 L-100 592 Z"
          fill="white"
          fillOpacity="0.05"
        />
        {/* Concentric rotated squares — bottom right anchor */}
        <rect
          x="980"
          y="60"
          width="440"
          height="440"
          rx="40"
          fill="none"
          stroke="white"
          strokeOpacity="0.10"
          strokeWidth="1.5"
          transform="rotate(12 1200 280)"
        />
        <rect
          x="1060"
          y="160"
          width="280"
          height="280"
          rx="28"
          fill="none"
          stroke="white"
          strokeOpacity="0.10"
          strokeWidth="1"
          transform="rotate(12 1200 280)"
        />
        {/* Thin chevron lines top-left */}
        <path
          d="M-40 220 L260 100 M-40 270 L260 150"
          stroke="white"
          strokeOpacity="0.12"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    )
  }

  // CTA variant — mirrored, slightly tighter
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 720"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <path
        d="M-100 120 L1540 580 L1540 640 L-100 180 Z"
        fill="white"
        fillOpacity="0.05"
      />
      <path
        d="M-100 260 L1540 680 L1540 712 L-100 292 Z"
        fill="white"
        fillOpacity="0.04"
      />
      <rect
        x="-220"
        y="80"
        width="440"
        height="440"
        rx="40"
        fill="none"
        stroke="white"
        strokeOpacity="0.10"
        strokeWidth="1.5"
        transform="rotate(-15 0 300)"
      />
      <rect
        x="-140"
        y="180"
        width="280"
        height="280"
        rx="28"
        fill="none"
        stroke="white"
        strokeOpacity="0.10"
        strokeWidth="1"
        transform="rotate(-15 0 300)"
      />
    </svg>
  )
}
