'use client'

import { useState } from 'react'
import { t } from '@/lib/content'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function CTAFinal() {
  const c = t.cta
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async () => {
    if (!form.name || !form.email) return
    setStatus('sending')
    try {
      // Wire to your endpoint (Formspree, Resend route, etc.) when ready.
      await new Promise((r) => setTimeout(r, 700))
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="cta-final"
      className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-800 to-indigo-700 py-24 text-white md:py-32"
    >
      <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-violet/30 blur-3xl" />
      <div className="container-x relative grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-300">Hablemos</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            {c.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">{c.subtitle}</p>
          <ul className="mt-8 space-y-3 text-sm text-white/85">
            {['Diagnóstico estratégico gratuito', 'Plan de siguientes pasos', 'Sin compromiso ni costo'].map(
              (l) => (
                <li key={l} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-indigo/30 text-indigo-200">
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                      <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.8" fill="none" />
                    </svg>
                  </span>
                  {l}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-8 text-slate-ink shadow-lift md:p-10">
          <h3 className="font-display text-xl font-bold">Cuéntanos sobre tu marca</h3>
          <div className="mt-6 grid gap-4">
            <Field label={c.name} value={form.name} onChange={update('name')} placeholder="Tu nombre" />
            <Field
              label={c.email}
              value={form.email}
              onChange={update('email')}
              type="email"
              placeholder="tucorreo@empresa.com"
            />
            <Field
              label={c.phone}
              value={form.phone}
              onChange={update('phone')}
              type="tel"
              placeholder="+593 99 999 9999"
            />
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate">{c.message}</label>
              <textarea
                value={form.message}
                onChange={update('message')}
                placeholder="¿Qué necesitas resolver con tu marketing?"
                rows={4}
                className="w-full rounded-xl border border-slate-line bg-white px-4 py-3 text-sm text-slate-ink outline-none transition focus:border-indigo focus:ring-2 focus:ring-indigo/10"
              />
            </div>
            <button
              type="button"
              onClick={submit}
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              {status === 'sending' ? 'Enviando…' : status === 'success' ? '¡Recibido!' : c.submit + ' →'}
            </button>
            {status === 'success' && (
              <p className="text-center text-sm font-medium text-indigo">
                Gracias. Te respondemos en menos de 24 horas.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm font-medium text-indigo">
                Ocurrió un error. Escríbenos directo a {t.footer.email}.
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
      <label className="mb-1.5 block text-xs font-semibold text-slate">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-line bg-white px-4 py-3 text-sm text-slate-ink outline-none transition focus:border-indigo focus:ring-2 focus:ring-indigo/10"
      />
    </div>
  )
}
