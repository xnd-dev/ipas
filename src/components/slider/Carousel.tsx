import Image from 'next/image'
import avatar1 from '../../../public/avatar-1.svg'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import * as S from './Carousel.styles'

type SlideData = {
  avatar: string
  description: string
  name: string
}

const slidesData: SlideData[] = [
  {
    avatar: avatar1,
    description:
      'Como doadora do IPAS, testemunhei de perto a transformação que ele é capaz de realizar. Ver as crianças, os jovens e os adultos vulneráveis sendo beneficiados pelos projetos de educação, cultura e assistência social é verdadeiramente inspirador. Estou orgulhosa de fazer parte desse movimento que combate a desigualdade e promove oportunidades para todos.',
    name: '— Mariana Souza, doadora do IPAS.',
  },
  {
    avatar: avatar1,
    description: '...',
    name: '...',
  },
]

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSwipe = (delta: number) => {
    if (delta < 0 && activeIndex < slidesData.length - 1) {
      setActiveIndex(activeIndex + 1)
    } else if (delta > 0 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(-1),
    onSwipedRight: () => handleSwipe(1),
  })

  const currentItem = slidesData[activeIndex]

  return (
    <S.SectionContainer id="carousel" {...swipeHandlers}>
      <S.SectionContainer>
        <S.CarouselContent>
          <div className="carousel-slide active">
            <Image src={currentItem.avatar} alt="avatar" />
            <h2>Porque ajudar o IPAS:</h2>
            <h3>{currentItem.description}</h3>
            <h4>— {currentItem.name}, doadora do IPAS.</h4>
          </div>
        </S.CarouselContent>
        <div className="carousel-navigation">
          {slidesData.map((_, index) => (
            <div
              className={`carousel-dot ${
                index === activeIndex ? 'active' : ''
              }`}
              key={index}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
      </S.SectionContainer>
    </S.SectionContainer>
  )
}
