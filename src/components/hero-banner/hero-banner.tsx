import { HandCoins } from '@phosphor-icons/react'
import * as S from './hero-banner.styles'

export function HeroBanner() {
  return (
    <S.SectionContainer id="hero-banner">
      <S.ContentContainer>
        <S.TitleContainer>
          IPAS - Instituto Profissionalizante e de Assistência Social
        </S.TitleContainer>
        <S.SubtitleContainer>
          Somos uma ONG responsável por
          <S.SpanContainer> promover projetos sociais </S.SpanContainer>
          para crianças, jovens e adultos
        </S.SubtitleContainer>
        <S.TextContainer>
          Junte-se a nós nessa jornada de transformação social e faça parte do
          nosso movimento em prol de um impacto positivo na vida das pessoas
          vulneráveis.
        </S.TextContainer>
        <S.ButtonContainer>
          Doe agora <HandCoins size={'1rem'} />
        </S.ButtonContainer>
      </S.ContentContainer>
    </S.SectionContainer>
  )
}
