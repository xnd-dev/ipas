import {
  ButtonContainer,
  HeaderContainer,
  HorizontalContainer,
  ImageContainer,
  InsideTextContainer,
  NavContainer,
  OptionsContainer,
} from './header.styles'

import ipasLogo from '../../../public/ipas-blue-logo.svg'

import { HandCoins } from '@phosphor-icons/react'
import Image from 'next/image'

export function Header() {
  return (
    <HeaderContainer>
      <HorizontalContainer>
        <ImageContainer>
          <Image src={ipasLogo} alt="" />
        </ImageContainer>
        <OptionsContainer>
          <NavContainer href="#projects">Nossos Projetos</NavContainer>
          <NavContainer href="#help">Como ajudar</NavContainer>
          <NavContainer href="#voluntary">Seja um Voluntário</NavContainer>
          <NavContainer href="#contact">Contato</NavContainer>
          <ButtonContainer>
            <InsideTextContainer> Doe agora </InsideTextContainer>
            <HandCoins size={'1rem'} />
          </ButtonContainer>
        </OptionsContainer>
      </HorizontalContainer>
    </HeaderContainer>
  )
}
