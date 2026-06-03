'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { t } from '@/lib/content'

export default function Hero() {
  const h = t.hero
  return (
    <section className="relative overflow-hidden pt-32 pb-24 text-white md:pt-44 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-indigo-700" />
        <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-indigo/30 blur-3xl" />
        <div className="absolute -right-40 top-40 h-[32rem] w-[32rem] rounded-full bg-violet/30 blur-3xl" />
      </div>

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-indigo" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            {h.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 max-w-4xl font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[4.25rem]"
        >
          {h.title.split(',')[0]},
          <br />
          <span className="text-indigo-300">{h.title.split(',').slice(1).join(',').trim()}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
        >
          {h.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
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
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex items-center gap-3 text-sm font-medium text-white/65"
        >
          <span className="h-px w-10 bg-white/30" />
          {h.trust}
        </motion.div>
      </div>
    </section>
  )
}
