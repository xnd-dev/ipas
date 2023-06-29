import { HandCoins } from '@phosphor-icons/react'
import {
  ButtonContainer,
  ContentContainer,
  SectionContainer,
  SpanContainer,
  SubtitleContainer,
  TextContainer,
  TitleContainer,
} from './first-section.styles'

export function Section1() {
  return (
    <SectionContainer id="01">
      <ContentContainer>
        <TitleContainer>
          IPAS - Instituto Profissionalizante e de Assistência Social
        </TitleContainer>
        <SubtitleContainer>
          Somos uma ONG responsável
          <div>
            por
            <SpanContainer> promover projetos sociais</SpanContainer> para
            crianças, jovens e adultos
          </div>
        </SubtitleContainer>
        <TextContainer>
          Junte-se a nós nessa jornada de transformação social e faça parte do
          nosso movimento em prol de um impacto positivo na vida das pessoas
          vulneráveis.
        </TextContainer>
        <ButtonContainer>
          Doe agora <HandCoins size={16} />{' '}
        </ButtonContainer>
      </ContentContainer>
    </SectionContainer>
  )
}
