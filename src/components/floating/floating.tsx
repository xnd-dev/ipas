import * as S from './floating.styles'

import Image from 'next/image'
type FloatingProps = {
    image: string;
    left: number;
    top: number;
  };

export function Floating({ image,left,top }: FloatingProps) {
  return (
    <S.FloatingContainer
      css={{
        top: `${top}rem`, 
        left: `${left}rem` 
      }}
    >
      <img src={image}alt="Elemento gráfico"/>
    </S.FloatingContainer>
  )
}
