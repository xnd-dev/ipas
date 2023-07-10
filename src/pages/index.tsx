import { Header } from '@/components/header/header'
import { HeroBanner } from '@/components/hero-banner'
import { NumbersDisplay } from '@/components/numbers-display'
import { Carousel } from '@/components/carousel'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <NumbersDisplay />
      <Carousel />
    </div>
  )
}
