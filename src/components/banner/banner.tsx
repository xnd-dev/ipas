import { HandCoins } from '@phosphor-icons/react'
import * as S from './banner.styles'
import { Floating } from '../floating'

export function Banner() {
  return (
    <S.BannerContainer>
        <Floating image={"setor-circular.svg"} left={76.31} top={35.69}/>
        <Floating image={"common_orangecircle.png"} left={-4.16} top={46}/>
        <Floating image={"common_whitecircle.png"} left={13.25} top={81.25}/>
        <S.BannerContent>
            <S.TitleContainer>
                Transformando vidas de crianças e adultos
            </S.TitleContainer>
            <S.ParagraphContainer>
                Junte-se a nós nessa jornada de transformação social e apoie nossos projetos.
            </S.ParagraphContainer>
            <S.ButtonsContainer>
                <S.ButtonContainer>
                    <S.InsideTextContainer> Faça uma doação </S.InsideTextContainer><HandCoins size={'1rem'} />
                </S.ButtonContainer>
                <S.ButtonContainerWhite>Conheça nossos projetos</S.ButtonContainerWhite>
            </S.ButtonsContainer>
        </S.BannerContent>
    </S.BannerContainer>
  )
}
