'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n'
import BackgroundGeometry from './BackgroundGeometry'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function CTAFinal() {
  const { t } = useLanguage()
  const c = t.cta
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async () => {
    if (!form.name || !form.email) return
    setStatus('sending')
    try {
      await new Promise((r) => setTimeout(r, 700))
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const buttonLabel =
    status === 'sending'
      ? c.sending
      : status === 'success'
        ? c.sent
        : `${c.submit} →`

  return (
    <section
      id="cta-final"
      className="relative overflow-hidden py-28 text-white md:py-36"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-indigo-700" />
        <BackgroundGeometry variant="cta" />
        <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-violet/30 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-indigo/30 blur-3xl" />
      </div>

      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="text-white">
          <p className="section-tag-light">{c.eyebrowLeft}</p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-white md:text-5xl lg:text-[3.5rem]">
            {c.title}
          </h2>
          <div className="mt-7 h-px w-16 bg-indigo-300/70" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 md:text-lg">
            {c.subtitle}
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/90">
            {c.bullets.map((l) => (
              <li key={l} className="flex items-center gap-3">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-indigo/40 text-white">
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                    <path
                      d="M2 5l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      fill="none"
                    />
                  </svg>
                </span>
                {l}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-8 text-slate-ink shadow-lift md:p-10">
          <h3 className="font-display text-xl font-bold text-slate-ink">{c.formHeading}</h3>
          <div className="mt-2 h-px w-12 bg-indigo" />
          <div className="mt-6 grid gap-4">
            <Field
              label={c.name}
              value={form.name}
              onChange={update('name')}
              placeholder={c.namePlaceholder}
            />
            <Field
              label={c.email}
              value={form.email}
              onChange={update('email')}
              type="email"
              placeholder={c.emailPlaceholder}
            />
            <Field
              label={c.phone}
              value={form.phone}
              onChange={update('phone')}
              type="tel"
              placeholder={c.phonePlaceholder}
            />
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate">
                {c.message}
              </label>
              <textarea
                value={form.message}
                onChange={update('message')}
                placeholder={c.messagePlaceholder}
                rows={4}
                className="w-full rounded-xl border border-slate-line bg-white px-4 py-3 text-sm text-slate-ink outline-none transition placeholder:text-slate-mute focus:border-indigo focus:ring-4 focus:ring-indigo/15"
              />
            </div>
            <button
              type="button"
              onClick={submit}
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              {buttonLabel}
            </button>
            {status === 'success' && (
              <p className="text-center text-sm font-medium text-indigo">{c.successMsg}</p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm font-medium text-indigo">
                {c.errorMsg} {t.footer.email}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-line bg-white px-4 py-3 text-sm text-slate-ink outline-none transition placeholder:text-slate-mute focus:border-indigo focus:ring-4 focus:ring-indigo/15"
      />
    </div>
  )
}
