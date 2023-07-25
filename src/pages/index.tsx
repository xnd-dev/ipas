import { Header } from '@/components/header/header'
import { HeroBanner } from '@/components/hero-banner'
import { NumbersDisplay } from '@/components/numbers-display'
import { ProjectOverview } from '@/components/projects-overview'
import { Footer } from '@/components/footer'
import { CallToAction } from '@/components/cta'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <NumbersDisplay />
      <ProjectOverview />
      <Footer />
      <CallToAction />
    </div>
  )
}
