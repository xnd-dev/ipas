import * as S from './footer.styles'
import ipasLogoFooter from '../../../public/ipas-blue-footer-logo.svg'
import Image from 'next/image'
import {
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
} from '@phosphor-icons/react'

export function Footer() {
  return (
    <S.FooterContainer id="contato">
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
              <S.EmailContainer href="mailto:contato@ipas.com">
                contato@ipas.com
              </S.EmailContainer>
              <S.PhoneContainer href="https://wa.me/5582996621031">
                (82) 99662-1031
              </S.PhoneContainer>
            </S.InfoContactsContainer>
            <S.SocialsContainer>
              <S.SocialContainer href="https://instagram.com">
                <InstagramLogo size={'1.5rem'} />
              </S.SocialContainer>
              <S.SocialContainer href="https://www.linkedin.com/company/institutoipas/">
                <LinkedinLogo size={'1.5rem'} />
              </S.SocialContainer>
              <S.SocialContainer href="https://facebook.com">
                <FacebookLogo size={'1.5rem'} />
              </S.SocialContainer>
            </S.SocialsContainer>
          </S.ContactsContainer>
        </S.SocialAndContactsContainer>
      </S.HorizontalContainer>
    </S.FooterContainer>
  )
}
