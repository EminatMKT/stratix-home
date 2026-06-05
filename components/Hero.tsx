'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n'
import BackgroundGeometry from './BackgroundGeometry'

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero
  const [titleStart, ...titleRest] = h.title.split(',')
  const titleHi = titleRest.join(',').trim()

  return (
    <section className="relative overflow-hidden pt-32 pb-28 text-white md:pt-44 md:pb-36">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-indigo-700" />
        <BackgroundGeometry variant="hero" />
        <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-indigo/30 blur-3xl" />
        <div className="absolute -right-40 top-40 h-[32rem] w-[32rem] rounded-full bg-violet/30 blur-3xl" />
      </div>

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">
            {h.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-7 max-w-5xl font-display text-[2.75rem] font-extrabold leading-[1.02] tracking-tight text-white md:text-[4.25rem] lg:text-[5rem]"
        >
          {titleStart},
          <br />
          <span className="text-indigo-300">{titleHi}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 h-px w-24 origin-left bg-indigo-300/70"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
        >
          {h.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link href="/contacto" className="btn-primary">
            {h.primary} →
          </Link>
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
          >
            {h.secondary}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-14 flex items-center gap-4 text-sm font-medium text-white/65"
        >
          <span className="h-px w-10 bg-white/30" />
          {h.trust}
        </motion.div>
      </div>
    </section>
  )
}
