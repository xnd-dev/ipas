import * as S from './cta.styles'
import { Handshake } from '@phosphor-icons/react'

export function CallToAction() {
  return (
    <>
      <S.SectionContainer id="voluntary">
        <S.ContentContainer>
          <S.TitleContainer>
            Faça a diferença: seja voluntário no IPAS!
          </S.TitleContainer>
          <S.TextContainer>
            Ajude a transformar uma vida, para que essa semente germine, cresça e se transforme num futuro de sucesso.
          </S.TextContainer>
          <S.ButtonContainer>
            <Handshake size={'1rem'} />Faça uma doação
          </S.ButtonContainer>
        </S.ContentContainer>
      </S.SectionContainer>
    </>
  )
}
