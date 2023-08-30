import Image from 'next/image'
import * as S from './carousel.styles'
import { useCarousel } from './carousel.hook'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

export function Carousel() {
  const {
    currentItem,
    swipeHandlers,
    decrement,
    increment,
    isSameIndex,
    setActiveIndex,
    slidesData,
  } = useCarousel()

  return (
    <S.SectionContainer id="carousel" {...swipeHandlers}>
      <S.CarouselContainer>
        <S.CaretContainer>
          <CaretLeft size={'2.5rem'} onClick={decrement} />
        </S.CaretContainer>
        <S.CarouselContent>
          <S.SliderContainer>
            <S.TitleContainer>O que falam do IPAS</S.TitleContainer>
            <S.SlideContainer>
              <S.SubtitleContainer>
                {currentItem.description}
              </S.SubtitleContainer>
              <S.SignatureContainer>{currentItem.name}</S.SignatureContainer>
            </S.SlideContainer>
            <S.NavigationContainer>
              {slidesData.map((_, index) => (
                <S.DotContainer
                  key={index}
                  active={isSameIndex(index)}
                  onClick={() => setActiveIndex(index)}
                ></S.DotContainer>
              ))}
            </S.NavigationContainer>
          </S.SliderContainer>
          <Image src={currentItem.avatar} alt="avatar" />
        </S.CarouselContent>
        <S.CaretContainer>
          <CaretRight size={'2.5rem'} onClick={increment} />
        </S.CaretContainer>
      </S.CarouselContainer>
    </S.SectionContainer>
  )
}
