import Image from 'next/image'
import * as S from './carousel.styles'
import { useCarousel } from './carousel.hook'

export function Carousel() {
  const { currentItem, swipeHandlers, setActiveIndex, slidesData } =
    useCarousel()

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
