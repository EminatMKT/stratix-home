import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/lib/i18n'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://stratix360.com'),
  title: {
    default: 'Stratix Communications — Your full marketing team',
    template: '%s · Stratix Communications',
  },
  description:
    'Full-service marketing agency — strategy, paid media, design, web, SEO, AI and more. Built in Ecuador. Based in Miami. World-class output.',
  openGraph: {
    title: 'Stratix Communications — Your full marketing team',
    description:
      'Full-service marketing agency — strategy, paid media, design, web, SEO, AI and more.',
    url: 'https://stratix360.com',
    siteName: 'Stratix Communications',
    locale: 'en_US',
    alternateLocale: ['es_EC'],
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
