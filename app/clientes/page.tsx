import type { Metadata } from 'next'
import ClientesPageBody from './_Body'

export const metadata: Metadata = {
  title: 'Clients',
  description: 'Eminat holding brands and external clients that trust Stratix.',
}

export default function Page() {
  return <ClientesPageBody />
}
