import * as S from './cta.styles'
import hands from '../../../public/v5/cta_hands_button_icon.svg'
import Image from 'next/image'

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
            <a href="#help">
            <Image src={hands} alt="" width={16} height={16} />Faça uma doação
            </a>            
          </S.ButtonContainer>
        </S.ContentContainer>
      </S.SectionContainer>
    </>
  )
}
