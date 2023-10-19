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
import { useRouter } from 'next/router';

export function checkRoute(navLink: string, pathName: string): string {
  console.log(pathName);
  if (pathName !== '/') {
    return process.env.NEXT_PUBLIC_HOME_ROUTE + navLink
  }
  return navLink
}

export function Header() {
  const { pathname } = useRouter();
  return (
    <HeaderContainer>
      <HorizontalContainer>
        <ImageContainer>
          <Image src={ipasLogo} alt="" />
        </ImageContainer>
        <OptionsContainer>
          <NavContainer href={checkRoute("#projects", pathname)}>Nossos Projetos</NavContainer>
          <NavContainer href={checkRoute("#help", pathname)}>Como ajudar</NavContainer>
          <NavContainer href={checkRoute("#voluntary", pathname)}>Seja um Voluntário</NavContainer>
          <NavContainer href={checkRoute("#contact", pathname)}>Contato</NavContainer>
          <NavContainer href={checkRoute("#contact", pathname)}>Contato</NavContainer>
          <ButtonContainer>
            <InsideTextContainer> Doe agora </InsideTextContainer>
            <HandCoins size={'1rem'} />
          </ButtonContainer>
        </OptionsContainer>
      </HorizontalContainer>
    </HeaderContainer>
  )
}