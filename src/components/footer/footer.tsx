import * as S from './footer.styles'
import ipasLogoFooter from '../../../public/ipas-logo-footer.svg'
import Image from 'next/image'
import {
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
} from '@phosphor-icons/react'

export function Footer() {
  return (
    <S.FooterContainer>
      <S.HorizontalContainer>
        <Image src={ipasLogoFooter} alt="" />
        <S.OptionsContainer>
          <S.NavContainer href="#nossos-projetos">
            Nossos Projetos
          </S.NavContainer>
          <S.NavContainer href="#como-ajudar">Como ajudar</S.NavContainer>
          <S.NavContainer href="#seja-um-voluntario">
            Seja um Voluntário
          </S.NavContainer>
          <S.NavContainer href="#contato">Contato</S.NavContainer>
        </S.OptionsContainer>
        <S.SocialAndContactsContainer>
          <S.ContactsContainer>
            <S.TitleContainer>Contatos</S.TitleContainer>
            <S.InfoContactsContainer>
              <S.EmailContainer>
                <a href="mailto:contato@ipas.com">contato@ipas.com</a>
              </S.EmailContainer>
              <S.PhoneContainer>
                <a href="tel:(82) 99662-1031">(82) 99662-1031</a>
              </S.PhoneContainer>
            </S.InfoContactsContainer>
            <S.SocialsContainer>
              <a href="https://instagram.com">
                <InstagramLogo size={'1.5rem'} />
              </a>
              <a href="https://linkedin.com">
                <LinkedinLogo size={'1.5rem'} />
              </a>
              <a href="https://facebook.com">
                <FacebookLogo size={'1.5rem'} />
              </a>
            </S.SocialsContainer>
          </S.ContactsContainer>
        </S.SocialAndContactsContainer>
      </S.HorizontalContainer>
    </S.FooterContainer>
  )
}
