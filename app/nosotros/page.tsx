import type { Metadata } from 'next'
import NosotrosPageBody from './_Body'

export const metadata: Metadata = {
  title: 'About',
  description: 'Who we are — an agency with Ecuador talent and Miami presence.',
}

export default function Page() {
  return <NosotrosPageBody />
}
