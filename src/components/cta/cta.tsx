import * as S from './cta.styles'
import { Handshake } from '@phosphor-icons/react'

export function CallToAction() {
  return (
    <>
      <S.SectionContainer id="seja-um-voluntario">
        <S.ContentContainer>
          <S.TitleContainer>
            Faça a diferença, seja voluntário no IPAS!
          </S.TitleContainer>
          <S.TextContainer>
            Desperte seu espírito solidário e faça parte do nosso movimento de
            transformação social. Juntos, podemos criar um mundo mais justo e
            contribuir para a mudança positiva na vida das pessoas mais
            vulneráveis.
          </S.TextContainer>
          <S.ButtonContainer>
            Quero ajudar <Handshake size={'1rem'} />
          </S.ButtonContainer>
        </S.ContentContainer>
      </S.SectionContainer>
    </>
  )
}
