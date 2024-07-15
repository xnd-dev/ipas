import { useState } from 'react';
import * as S from './dinamiccarousel.styles';
import { motion, AnimatePresence } from 'framer-motion';
import { slidesData } from './dinamiccarousel.constants';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import rectangle from '../../../public/blue-rectangle.svg';
import quote from '../../../public/chat-quote.svg';
import square from '../../../public/square-decoration.svg';
import Image from 'next/image';

const DinamicCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextBanner = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const prevBanner = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
  };

  const goToIndex = (newIndex: number) => {
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  return (
    <S.SectionContainer id="carousel">
      <S.CarouselContainer>
        <S.CaretContainer>
          <CaretLeft size={'2.5rem'} onClick={prevBanner} />
        </S.CaretContainer>
        
        <S.CarouselContent>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1em',
                boxSizing: 'border-box'
              }}
            >
              <S.SliderContainer>
                <div>
                  <S.TitleContainer>Quem faz acontecer:</S.TitleContainer>
                  <S.comments>{slidesData[index].description}</S.comments>
                  <S.SignatureContainer>
                    — {slidesData[index].name}<br />
                    {slidesData[index].occupation}
                  </S.SignatureContainer>
                  <S.NavigationContainer>
                    {slidesData.map((_, i) => (
                      <S.DotContainer
                        key={i}
                        active={i === index}
                        onClick={() => goToIndex(i)}
                      />
                    ))}
                  </S.NavigationContainer>
                </div>
                <S.ImageContainer>
                  <Image src={rectangle} alt="rectangle" id="rectangle" />
                  <Image src={slidesData[index].avatar} alt="avatar" id="avatar" />
                  <Image src={quote} alt="quote" id="quote" />
                  <Image src={square} alt="square" id="square" />
                </S.ImageContainer>
              </S.SliderContainer>
            </motion.div>
          </AnimatePresence>
        </S.CarouselContent>
        
        <S.CaretContainer>
          <CaretRight size={'2.5rem'} onClick={nextBanner} />
        </S.CaretContainer>
      </S.CarouselContainer>

    </S.SectionContainer>
  );
};

export default DinamicCarousel;
