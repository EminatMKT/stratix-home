import Hero from '@/components/Hero'
import ServicesMarquee from '@/components/ServicesMarquee'
import ServicesGrid from '@/components/ServicesGrid'
import ValueProp from '@/components/ValueProp'
import Clientes from '@/components/Clientes'
import Proceso from '@/components/Proceso'
import Stats from '@/components/Stats'
import CTAFinal from '@/components/CTAFinal'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <ServicesGrid />
      <ValueProp />
      <Clientes />
      <Proceso />
      <Stats />
      <CTAFinal />
    </>
  )
}
