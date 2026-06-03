import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://stratixsolutions.us'),
  title: {
    default: 'Stratix Solutions — Tu equipo de marketing completo',
    template: '%s · Stratix Solutions',
  },
  description:
    'Agencia de marketing full-service: estrategia, paid media, diseño, web, SEO, IA y más. Talento Ecuador · Presencia Miami · Calidad internacional.',
  openGraph: {
    title: 'Stratix Solutions — Tu equipo de marketing completo',
    description:
      'Agencia de marketing full-service: estrategia, paid media, diseño, web, SEO, IA y más.',
    url: 'https://stratixsolutions.us',
    siteName: 'Stratix Solutions',
    locale: 'es_EC',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>
        <Navbar />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
