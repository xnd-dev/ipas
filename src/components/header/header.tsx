import {
  ButtonContainer,
  HeaderContainer,
  HorizontalContainer,
  ImageContainer,
  InsideTextContainer,
  MenuContainer,
  NavContainer,
  OptionsContainer,
} from './header.styles'

import ipasLogo from '../../../public/ipas-blue-logo.svg'
import mobileMenu from '../../../public/mobile-menu.svg'

import { HandCoins } from '@phosphor-icons/react'
import Image from 'next/image'
import { useState } from 'react'
import { Modal } from '../modal'

export function Header() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <HeaderContainer>
      <HorizontalContainer>
        <ImageContainer>
          <Image src={ipasLogo} alt="ipas logo" />
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
        <MenuContainer onClick={ () => setOpenModal(true) }>
          <Image src={mobileMenu} alt="mobile menu"/>
        </MenuContainer>
        <Modal isOpen={openModal} closeModal={() => setOpenModal(false)} />
      </HorizontalContainer>
    </HeaderContainer>
  )
}
