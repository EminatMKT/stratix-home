import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getServiceRaw, getServiceSlugs } from '@/lib/services'
import ServiceDetailBody from './_Body'

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getServiceRaw(params.slug)
  if (!s) return { title: 'Service not found' }
  return { title: s.title.en, description: s.short.en }
}

export default function Page({ params }: { params: { slug: string } }) {
  const exists = !!getServiceRaw(params.slug)
  if (!exists) notFound()
  return <ServiceDetailBody slug={params.slug} />
}
