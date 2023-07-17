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
    <S.HeaderContainer>
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
            <S.TitleContainer>Contato</S.TitleContainer>
            <S.InfoContactsContainer>
              <S.EmailContainer>contato@ipas.com</S.EmailContainer>
              <S.PhoneContainer>(82) 99662-1031</S.PhoneContainer>
            </S.InfoContactsContainer>
            <S.SocialsContainer>
              <InstagramLogo size={'1.5rem'} />
              <LinkedinLogo size={'1.5rem'} />
              <FacebookLogo size={'1.5rem'} />
            </S.SocialsContainer>
          </S.ContactsContainer>
        </S.SocialAndContactsContainer>
      </S.HorizontalContainer>
    </S.HeaderContainer>
  )
}
