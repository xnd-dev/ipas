import { Header } from '@/components/header/header'
import { HeroBanner } from '@/components/hero-banner'
import { NumbersDisplay } from '@/components/numbers-display'
import { PixPage } from '@/components/pix-page/pix-page'
import { ProjectOverview } from '@/components/projects-overview'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <NumbersDisplay />
      <ProjectOverview />
      <PixPage />
    </div>
  )
}
