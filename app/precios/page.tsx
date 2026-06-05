import type { Metadata } from 'next'
import PreciosPageBody from './_Body'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Stratix plans and rates — coming soon.',
}

export default function Page() {
  return <PreciosPageBody />
}
