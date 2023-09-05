import * as React from 'react'
import * as S from './numbers-display.styles'
import { informationsData } from './numbers-display.constants'

export function NumbersDisplay() {
  return (
    <S.SectionContainer id="nossos-números">
      <S.CardsContainer>
        {informationsData.map(
          ({ title, value, description, backgroundImage }, index) => (
            <S.CardContainer
              key={index}
              style={{ backgroundImage: `url(${backgroundImage.src})` }}
            >
              <S.TitleContainer>{title}</S.TitleContainer>
              <S.SubtitleContainer>
                <S.StrongContainer>{value}</S.StrongContainer>
                <S.DescriptionContainer>{description}</S.DescriptionContainer>
              </S.SubtitleContainer>
            </S.CardContainer>
          ),
        )}
      </S.CardsContainer>
    </S.SectionContainer>
  )
}
