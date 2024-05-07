import { HandCoins } from '@phosphor-icons/react'
import * as S from './banner.styles'
import { Floating } from '../floating'

export function Banner() {
  return (
    <S.BannerContainer>
        <Floating 
            image={"common_whitecircle.png"} 
            left={{ default: 13.25, sm: 13.25 }} 
            top={{ default: 81.25, sm: 82.25 }}
            width={{ default: 'auto', sm: 7 }}
            display={{ default: 'block', sm: 'none' }}/>
        <S.BannerContent>
            <S.TitleContainer>
                Transformando vidas de crianças e adultos
            </S.TitleContainer>
            <S.ParagraphContainer>
                Junte-se a nós nessa jornada de transformação social e apoie nossas iniciativas.
            </S.ParagraphContainer>
            <S.ButtonsContainer>
                <S.ButtonContainer href="#help">
                    <S.InsideTextContainer><HandCoins size={'1rem'} /> Faça uma doação </S.InsideTextContainer>
                </S.ButtonContainer>
                <S.ButtonContainerWhite href="#projects">Conheça nossos projetos</S.ButtonContainerWhite>
            </S.ButtonsContainer>
        </S.BannerContent>
    </S.BannerContainer>
  )
}
