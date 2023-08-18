import * as React from 'react'
import * as S from './numbers-display.styles'
import { informationsData } from './numbers-display.constants'

export function NumbersDisplay() {
  return (
    <S.SectionContainer id="nossos-números">
      <S.ContentContainer>
        <S.TextsContainer>
          <S.TitleContainer> Nossos números:</S.TitleContainer>
          <S.SubtitleContainer>
            Grandes números, grandes impactos
          </S.SubtitleContainer>
        </S.TextsContainer>
        <S.CardsContainer>
          {informationsData.map(({ icon: Icon, value, description }, index) => (
            <S.CardContainer key={index}>
              {<Icon size={'2rem'} />}
              <S.StrongContainer>{value}</S.StrongContainer>
              <S.InsideTextContainer>{description}</S.InsideTextContainer>
            </S.CardContainer>
          ))}
        </S.CardsContainer>
      </S.ContentContainer>
    </S.SectionContainer>
  )
}
