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
    description:
      'Como doadora do IPAS, testemunhei de perto a transformação que ele é capaz de realizar.',
    name: '— Mariana Souza 2',
  },
  {
    avatar: avatar1,
    description:
      'Ver as crianças, os jovens e os adultos vulneráveis sendo beneficiados pelos projetos de educação, cultura e assistência social é verdadeiramente inspirador.',
    name: '— Mariana Souza 3',
  },
  {
    avatar: avatar1,
    description:
      'Estou orgulhosa de fazer parte desse movimento que combate a desigualdade e promove oportunidades para todos.',
    name: '— Mariana Souza 4',
  },
]

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

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
      <S.CarouselContainer>
        <S.TitleContainer>Porque ajudar o IPAS:</S.TitleContainer>
        <S.CarouselContent>
          <S.SlideContainer>
            <Image
              src={currentItem.avatar}
              alt="avatar"
              width={160}
              height={160}
            />
            <S.SpanContainer>
              <S.SubtitleContainer>
                {currentItem.description}
              </S.SubtitleContainer>
              <S.SignatureContainer>{currentItem.name}</S.SignatureContainer>
            </S.SpanContainer>
          </S.SlideContainer>
          <S.NavigationContainer>
            {slidesData.map((_, index) => (
              <S.DotContainer
                key={index}
                onClick={() => setActiveIndex(index)}
              ></S.DotContainer>
            ))}
          </S.NavigationContainer>
        </S.CarouselContent>
      </S.CarouselContainer>
    </S.SectionContainer>
  )
}
