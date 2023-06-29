import {
  BlueContainer,
  SectionContainer,
  SubtitleContainer,
  TitleContainer,
  YellowContainer,
} from './second-section.styles'

export function Section2() {
  return (
    <section id="nossos-números">
      <SectionContainer>
        <TitleContainer>Nossos números</TitleContainer>
        <SubtitleContainer>Grandes números, grandes impactos</SubtitleContainer>
        <div>
          <BlueContainer>6000 Pessoas impactadas</BlueContainer>
          <YellowContainer>850 Famílias atendidas mensalmente</YellowContainer>
          <BlueContainer>1500 Pessoas ajudadas em abril de 2023</BlueContainer>
          <YellowContainer>13 Anos de história</YellowContainer>
        </div>
      </SectionContainer>
    </section>
  )
}
