import {
  ButtonContainer,
  HeaderContainer,
  HorizontalContainer,
  ImageContainer,
  InsideTextContainer,
  NavContainer,
  OptionsContainer,
  HeaderOverlayContainer,
  HeaderSpaceContainer,
  SectionContainer,
} from './header.styles'

import ipasLogo from '../../../public/ipas-blue-logo.svg'

import { HandCoins } from '@phosphor-icons/react'
import Image from 'next/image'
import { useRouter } from 'next/router';

export function checkNavLinkRoute(navLink: string, pathName: string): string {
  if (pathName === '/') {
    return navLink
  }
  return process.env.NEXT_PUBLIC_HOME_ROUTE + navLink
}

export function Header() {
  const { pathname } = useRouter();
  return (
    <SectionContainer>
      <HeaderOverlayContainer>
        <HeaderContainer>
          <HorizontalContainer>
            <ImageContainer href={process.env.NEXT_PUBLIC_HOME_ROUTE ?? '/'}>
              <Image src={ipasLogo} alt="" />
            </ImageContainer>
            <OptionsContainer>
              <NavContainer href={checkNavLinkRoute("#projects", pathname)}>Nossos Projetos</NavContainer>
              <NavContainer href={checkNavLinkRoute("#help", pathname)}>Como ajudar</NavContainer>
              <NavContainer href={checkNavLinkRoute("#voluntary", pathname)}>Seja um Voluntário</NavContainer>
              <NavContainer href={checkNavLinkRoute("#contact", pathname)}>Contato</NavContainer>
              <NavContainer href={process.env.NEXT_PUBLIC_BLOG_ROUTE ?? '/'}>Blog</NavContainer>
              <ButtonContainer>
                <InsideTextContainer> Doe agora </InsideTextContainer>
                <HandCoins size={'1rem'} />
              </ButtonContainer>
            </OptionsContainer>
          </HorizontalContainer>
        </HeaderContainer>
      </HeaderOverlayContainer>
      <HeaderSpaceContainer></HeaderSpaceContainer>
    </SectionContainer>
  )
}