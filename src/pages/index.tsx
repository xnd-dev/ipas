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
    <div>
      <Header />
      <HeroBanner />
      <NumbersDisplay />
      <ProjectOverview />
<<<<<<< HEAD
      <PixPage />
=======
      <Carousel />
      <CallToAction />
      <Footer />
>>>>>>> 6fe97097d5185602f31a46e2f92f4fcdf6b87147
    </div>
  )
}
