import { Header } from '@/components/header/header'
import { HeroBanner } from '@/components/hero-banner'
import { NumbersDisplay } from '@/components/numbers-display'
import { PixPage } from '@/components/pix-page/pix-page'
import { ProjectOverview } from '@/components/projects-overview'
import { Carousel } from '@/components/carousel'
import { CallToAction } from '@/components/cta'
import { Footer } from '@/components/footer'
import Layout from '@/components/ipas-layout/ipas-layout'

export default function Home() {
  return (
    <>
      <Layout>
        <HeroBanner />
        <NumbersDisplay />
        <ProjectOverview />
        <PixPage />
        <Carousel />
        <CallToAction />
      </Layout>
    </>
  )
}
