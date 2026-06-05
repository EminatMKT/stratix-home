import type { Metadata } from 'next'
import ContactoPageBody from './_Body'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Let's talk. Offices in Miami and Guayaquil.",
}

export default function Page() {
  return <ContactoPageBody />
}
