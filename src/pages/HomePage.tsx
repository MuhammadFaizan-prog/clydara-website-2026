import Hero from '../components/Hero/Hero'
import LogoTicker from '../components/LogoTicker/LogoTicker'
import About from '../components/About/About'
import Works from '../components/Works/Works'
import Services from '../components/Services/Services'
import Founders from '../components/Founders/Founders'
import Values from '../components/Values/Values'
import Pricing from '../components/Pricing/Pricing'
import Testimonials from '../components/Testimonials/Testimonials'
import FAQ from '../components/FAQ/FAQ'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LogoTicker />
      <About />
      <Works />
      <Services />
      <Founders />
      <Values />
      <Pricing />
      <Testimonials />
      <FAQ />
    </main>
  )
}
