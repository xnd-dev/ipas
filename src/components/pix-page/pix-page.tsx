import { HandCoins } from '@phosphor-icons/react'
import * as S from './pix-page.styles'
import Image from 'next/image'
import Pix from '../../../public/qr-code-pix.svg'

export function PixPage() {
  return (
    <S.SectionContainer id="como-ajudar">
      <S.HelpContainer>
        <S.ContentContainer>
          <S.TitleContainer>Como ajudar:</S.TitleContainer>
          <S.SubtitleContainer>
            O IPAS conta com a sua generosidade para continuar transformando
            vidas.
            <p /> Sua doação é fundamental para que possamos proporcionar
            oportunidades e recursos para crianças, jovens e adultos em situação
            de vulnerabilidade social.
            <p /> Faça sua doação agora e faça parte dessa transformação.
          </S.SubtitleContainer>
          <S.AltDonationContainer>
            <S.AltTextContainer>Ou doe de outras formas:</S.AltTextContainer>
            <S.ButtonContainer>
              Doe agora <HandCoins />
            </S.ButtonContainer>
          </S.AltDonationContainer>
        </S.ContentContainer>
        <S.PixContainer>
          <S.PixTextContainer>Doe pelo nosso pix:</S.PixTextContainer>
          <Image src={Pix} alt="pix qrcode" />
        </S.PixContainer>
      </S.HelpContainer>
    </S.SectionContainer>
  )
}
