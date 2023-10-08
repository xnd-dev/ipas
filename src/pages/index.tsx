import { Header } from '@/components/header/header'
import { HeroBanner } from '@/components/hero-banner'
import { NumbersDisplay } from '@/components/numbers-display'
import { PixPage } from '@/components/pix-page/pix-page'
import { ProjectOverview } from '@/components/projects-overview'
import { Carousel } from '@/components/carousel'
import { CallToAction } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <NumbersDisplay />
      -<ProjectOverview />-
      <PixPage />
      <Carousel />
      <CallToAction />
      <Footer />
    </>
  )
}
