import * as React from 'react'
import * as S from './cards.styles'
import { informationsData } from './cards.constants'

export function Cards() {
  return (
    <S.SectionContainer id="nossos-números">
      <S.CardsContainer>
        {informationsData.map(
          //@ts-ignore
          ({ title, value, description, backgroundImage }, index) => (
            <S.CardContainer
              key={index}
              //@ts-ignore
              style={{ backgroundImage: `url(${backgroundImage.src})` }}
            >
              <S.ContentContainer>
                <S.TitleContainer>{title}</S.TitleContainer>
                <S.SubtitleContainer>
                  <S.StrongContainer>{value}</S.StrongContainer>
                  <S.DescriptionContainer>{description}</S.DescriptionContainer>
                </S.SubtitleContainer>
              </S.ContentContainer>
            </S.CardContainer>
          ),
        )}
      </S.CardsContainer>
    </S.SectionContainer>
  )
}
