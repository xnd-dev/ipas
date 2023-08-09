import {
  CalendarBlank,
  HandHeart,
  Smiley,
  UsersThree,
} from '@phosphor-icons/react'
import * as S from './numbers-display.styles'

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
          <S.CardContainer>
            <Smiley size={'2rem'} />
            <S.StrongContainer> 6000 </S.StrongContainer>
            <S.InsideTextContainer> Pessoas impactadas </S.InsideTextContainer>
          </S.CardContainer>
          <S.CardContainer>
            <UsersThree size={'2rem'} />
            <S.StrongContainer>850</S.StrongContainer>
            <S.InsideTextContainer>
              Famílias atendidas mensalmente
            </S.InsideTextContainer>
          </S.CardContainer>
          <S.CardContainer>
            <HandHeart size={'2rem'} />
            <S.StrongContainer>1500</S.StrongContainer>
            <S.InsideTextContainer>
              Pessoas ajudadas em abril de 2023
            </S.InsideTextContainer>
          </S.CardContainer>
          <S.CardContainer>
            <CalendarBlank size={'2rem'} />
            <S.StrongContainer>13</S.StrongContainer>
            <S.InsideTextContainer> Anos de história </S.InsideTextContainer>
          </S.CardContainer>
        </S.CardsContainer>
      </S.ContentContainer>
    </S.SectionContainer>
  )
}
