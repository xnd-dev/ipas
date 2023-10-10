import * as S from './footer.styles'
import ipasLogoFooter from '../../../public/ipas-blue-footer-logo.svg'
import Image from 'next/image'
import {
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
} from '@phosphor-icons/react'
import { links } from './footer.constants'

export function Footer() {
  return (
    <S.FooterContainer id="contact">
      <S.HorizontalContainer>
        <S.FooterLogoContainer>
          <Image src={ipasLogoFooter} alt="" />
        </S.FooterLogoContainer>
        <S.OptionsContainer>
          <S.TitleContainer>Navegação</S.TitleContainer>
          <S.NavContainer href="#projects">Nossos Projetos</S.NavContainer>
          <S.NavContainer href="#help">Como ajudar</S.NavContainer>
          <S.NavContainer href="#voluntary">Seja um Voluntário</S.NavContainer>
          <S.NavContainer href="#contact">Contato</S.NavContainer>
        </S.OptionsContainer>
        <S.SocialAndContactsContainer>
          <S.ContactsContainer>
            <S.TitleContainer>Contatos</S.TitleContainer>
            <S.InfoContactsContainer>
              <S.EmailContainer href={links.email}>
                contato@ipas.com
              </S.EmailContainer>
              <S.PhoneContainer href={links.whatsapp}>
                (82) 99662-1031
              </S.PhoneContainer>
            </S.InfoContactsContainer>
            <S.SocialsContainer>
              <S.SocialContainer href={links.instagram}>
                <InstagramLogo size={'1.5rem'} />
              </S.SocialContainer>
              <S.SocialContainer href={links.linkedin}>
                <LinkedinLogo size={'1.5rem'} />
              </S.SocialContainer>
              <S.SocialContainer href={links.facebook}>
                <FacebookLogo size={'1.5rem'} />
              </S.SocialContainer>
            </S.SocialsContainer>
          </S.ContactsContainer>
        </S.SocialAndContactsContainer>
      </S.HorizontalContainer>
    </S.FooterContainer>
  )
}
