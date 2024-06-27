import { Header } from '@/components/header/header'
import { HeroBanner } from '@/components/hero-banner'
import { Cards } from '@/components/cards'
import { PixPage } from '@/components/pix-page/pix-page'
import { ProjectOverview } from '@/components/projects-overview'
import { DinamicCarousel } from '@/components/dinamiccarousel'
import { Carousel } from '@/components/carousel'
import { CallToAction } from '@/components/cta'
import { Footer } from '@/components/footer'
import { Banner } from '@/components/banner'
import { Floating } from '@/components/floating'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Cards />
      <ProjectOverview />
      <PixPage />
      <DinamicCarousel />
      <CallToAction />
      <Footer />
    </>
  )
}
