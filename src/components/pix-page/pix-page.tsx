import * as S from './pix-page.styles'
import Image from 'next/image'
import Hands from '../../../public/hands.svg'
import Paypal from '../../../public/paypal.svg'
import Pix from '../../../public/pix-logo.svg'

export function PixPage() {
  return (
    <S.SectionContainer id="help">
      <S.BoxContainer>
        <S.HelpContainer>
          <S.TitleContainer>Como ajudar?</S.TitleContainer>
          <S.ContentContainer>
            <S.SubtitleContainer>
              Conecte-se com a nossa causa e ofereça suporte para aqueles que
              mais precisam.
              <p /> Sua participação é fundamental para que possamos alcançar
              ainda mais vidas!
            </S.SubtitleContainer>

            {/* 
            <S.ValuesContainer>
              <S.ButtonContainer> R$20 </S.ButtonContainer>
              <S.ButtonContainer> R$50 </S.ButtonContainer>
              <S.ButtonContainer> R$100 </S.ButtonContainer>
              <S.ButtonContainer> R$200 </S.ButtonContainer>
            </S.ValuesContainer>

            <S.MonthlyDonationContainer>
              <input type="checkbox" /> Doar mensalmente
            </S.MonthlyDonationContainer>
            */}
            <S.AltDonationContainer>
              <S.AltButtonContainer>
                <Image src={Paypal} alt="PayPal" />
              </S.AltButtonContainer>
              <S.AltButtonContainer>
                <Image src={Pix} alt="Pix" /> Doe com pix
              </S.AltButtonContainer>
            </S.AltDonationContainer>
          </S.ContentContainer>
        </S.HelpContainer>
        <S.ImageContainer>
        <Image src={Hands} alt="white and black hand together" />
        </S.ImageContainer>
      </S.BoxContainer>
    </S.SectionContainer>
  )
}
