import {
  CalendarBlank,
  HandHeart,
  Smiley,
  UsersThree,
} from '@phosphor-icons/react'
import {
  BlueContainer,
  ContentContainer,
  SectionContainer,
  SubtitleContainer,
  TitleContainer,
  YellowContainer,
} from './second-section.styles'

export function Section2() {
  return (
    <section id="nossos-números">
      <SectionContainer>
        <ContentContainer>
          <TitleContainer> Nossos números</TitleContainer>
          <SubtitleContainer>
            Grandes números, grandes impactos
          </SubtitleContainer>
          <div>
            <BlueContainer>
              <Smiley />
              6000 Pessoas impactadas
            </BlueContainer>
            <YellowContainer>
              <UsersThree />
              850 Famílias atendidas mensalmente
            </YellowContainer>
            <BlueContainer>
              <HandHeart />
              1500 Pessoas ajudadas em abril de 2023
            </BlueContainer>
            <YellowContainer>
              <CalendarBlank /> 13 Anos de história
            </YellowContainer>
          </div>
        </ContentContainer>
      </SectionContainer>
    </section>
  )
}
