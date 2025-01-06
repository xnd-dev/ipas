import { Header } from '@/components/header/header'
import { HeroBanner } from '@/components/hero-banner'
import { Cards } from '@/components/cards'
import { PixPage } from '@/components/pix-page/help-page'
import { ProjectOverview } from '@/components/projects-overview'
import { DinamicCarousel } from '@/components/dinamiccarousel'
import { Carousel } from '@/components/carousel'
import { CallToAction } from '@/components/cta'
import { Footer } from '@/components/footer'
import { Banner } from '@/components/banner'
import { Floating } from '@/components/floating'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Floating image={"setor-circular.svg"} 
            right={{ default: 0, sm: 0}} 
            top={{ default: 35.69, sm: 185.29 }}
            width={{ default: 'auto', sm: 22.8 }} />
        <Floating image={"common_orangecircle.png"} 
            left={{ default: -5, sm: -6.5 }} 
            top={{ default: 44, sm: 194 }}
            width={{ default: 'auto', sm: 13 }}/>
      <Cards />
      <ProjectOverview />
      <PixPage />
      <DinamicCarousel />
      <CallToAction />
      <Contact />
      <Footer />
    </>
  )
}
