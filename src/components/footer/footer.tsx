import * as S from './footer.styles'

import ipasLogoFooter from '../../../public/v5/FooterLogo.png'

import {
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
} from '@phosphor-icons/react'
import { links } from './footer.constants'

export function Footer() {
  return (
    <S.FooterContainer id="footer">
      <S.ContentContainer>
        <S.FooterLogo src={ipasLogoFooter} alt="" />
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
          </S.ContactsContainer>
          <S.SocialsContainer>
            <S.SocialContainer href={links.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramLogo size={'1.5rem'} />
            </S.SocialContainer>
            <S.SocialContainer href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinLogo size={'1.5rem'} />
            </S.SocialContainer>
          </S.SocialsContainer>

        </S.SocialAndContactsContainer>
      </S.ContentContainer>
    </S.FooterContainer>
  )
}
