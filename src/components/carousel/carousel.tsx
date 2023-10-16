import Image from 'next/image'
import * as S from './carousel.styles'
import { useCarousel } from './carousel.hook'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import rectangle from '../../../public/blue-rectangle.svg'
import quote from '../../../public/chat-quote.svg'
import square from '../../../public/square-decoration.svg'

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
            <S.TitleContainer>Quem faz acontecer:</S.TitleContainer>
            <S.SlideContainer>
              <S.SubtitleContainer>
                {currentItem.description}
              </S.SubtitleContainer>
              <S.SignatureContainer>
                <S.SignatureTextContainer>
                  {currentItem.name}
                </S.SignatureTextContainer>
                <S.SignatureTextContainer>
                  {currentItem.occupation}
                </S.SignatureTextContainer>
              </S.SignatureContainer>
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
          <S.ImageContainer>
            <Image src={rectangle} alt="rectangle" id="rectangle" />
            <Image src={currentItem.avatar} alt="avatar" id="avatar" />
            <Image src={quote} alt="quote" id="quote" />
            <Image src={square} alt="square" id="square" />
          </S.ImageContainer>
        </S.CarouselContent>
        <S.CaretContainer>
          <CaretRight size={'2.5rem'} onClick={increment} />
        </S.CaretContainer>
      </S.CarouselContainer>
    </S.SectionContainer>
  )
}
