import {
  ButtonContainer,
  HeaderContainer,
  HorizontalContainer,
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
          <NavContainer href="#">Nossos Projetos</NavContainer>
          <NavContainer href="#">Como ajudar</NavContainer>
          <NavContainer href="#">Seja um Voluntário</NavContainer>
          <NavContainer href="#">Contato</NavContainer>
          <ButtonContainer>
            <HandCoins size={32} /> Doe agora
          </ButtonContainer>
        </OptionsContainer>
      </HorizontalContainer>
    </HeaderContainer>
  )
}
