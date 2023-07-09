import { Header } from '@/components/header/header'
import { HeroBanner } from '@/components/hero-banner'
import { NumbersDisplay } from '@/components/numbers-display'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <NumbersDisplay />
    </div>
  )
}
