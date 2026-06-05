import type { Metadata } from 'next'
import ServiciosPageBody from './_Body'

export const metadata: Metadata = {
  title: 'Services',
  description: '11 integrated services across marketing, design, web, data and tech.',
}

export default function Page() {
  return <ServiciosPageBody />
}
