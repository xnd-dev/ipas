import { HandCoins } from '@phosphor-icons/react'
import * as S from './banner.styles'
import { Floating } from '../floating'

export function Banner() {
  return (
    <S.BannerContainer>
        <Floating image={"setor-circular.svg"} 
            right={{ default: 0, sm: 0}} 
            top={{ default: 35.69, sm: 41.6 }}
            width={{ default: 'auto', sm: 6.8125 }} />
        <Floating image={"common_orangecircle.png"} 
            left={{ default: -4.16, sm: -1.46 }} 
            top={{ default: 46, sm: 44.69 }}
            width={{ default: 'auto', sm: 2.9375 }}/>
        <Floating 
            image={"common_whitecircle.png"} 
            left={{ default: 13.25, sm: 13.25 }} 
            top={{ default: 81.25, sm: 81.25 }}
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
                <S.ButtonContainer>
                    <S.InsideTextContainer><HandCoins size={'1rem'} /> Faça uma doação </S.InsideTextContainer>
                </S.ButtonContainer>
                <S.ButtonContainerWhite>Conheça nossos projetos</S.ButtonContainerWhite>
            </S.ButtonsContainer>
        </S.BannerContent>
    </S.BannerContainer>
  )
}
