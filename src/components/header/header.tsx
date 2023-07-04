import {
  ButtonContainer,
  HeaderContainer,
  HorizontalContainer,
  InsideTextContainer,
  NavContainer,
  OptionsContainer,
} from './header.styles'

import ipasLogo from '../../../public/ipas-logo.svg'

import { HandCoins } from '@phosphor-icons/react'
import Image from 'next/image'

export function Header() {
  return (
    <HeaderContainer>
      <HorizontalContainer>
        <Image src={ipasLogo} alt="" />
        <OptionsContainer>
          <NavContainer href="#nossos-projetos">Nossos Projetos</NavContainer>
          <NavContainer href="#como-ajudar">Como ajudar</NavContainer>
          <NavContainer href="#seja-um-voluntario">
            Seja um Voluntário
          </NavContainer>
          <NavContainer href="#contato">Contato</NavContainer>
          <ButtonContainer>
            <InsideTextContainer> Doe agora </InsideTextContainer>
            <HandCoins size={'1rem'} />
          </ButtonContainer>
        </OptionsContainer>
      </HorizontalContainer>
    </HeaderContainer>
  )
}
