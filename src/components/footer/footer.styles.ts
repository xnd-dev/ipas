import { styled } from '@/lib/stitches'
import Image from 'next/image'

export const FooterContainer = styled('footer', {
  display: 'flex',
  width: '90rem',
  height: 'auto',
  padding: '$10 14.25rem',
  backgroundColor: '$neutral-0',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: "0 auto",
  '@sm': {
    padding: '$10 6.4375rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3.75rem',
  }
})

export const ContentContainer = styled('div', {
  display: 'flex',
  width: '61.5rem',
  height: 'auto',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: '0',
  '@sm': {
    flexDirection: 'column',
    width: 'auto',
    height: '30.625rem',
    gap: '3.75rem',
    justifyContent: 'center',
  }
})

export const FooterLogo = styled(Image, {
  maxWidth: '6rem',
  maxHeight: '5.5625rem',
  '@sm': {
    maxWidth: '7.8125rem',
    maxHeight: '7.25rem',
  }
})

export const TitleContainer = styled('h4', {
  fontFamily: '$default',
  fontSize: '$md',
  fontStyle: 'normal',
  fontWeight: '$semibold',
  lineHeight: '$short',
})

export const OptionsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '9.625rem',
  height: 'auto',
  gap: '$3',
  alignItems: 'flex-start',
  flexShrink: '0',
  '@sm': {
    alignItems: 'center',
    [`& ${TitleContainer}`]: {
      display: 'none'
    }
  }
})

export const NavContainer = styled('a', {
  color: '$neutral-4',
  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$shorter',
})

export const SocialAndContactsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '$3',
  alignSelf: 'stretch',
  "@sm": {
    alignItems: 'center'
  }
})

export const ContactsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '$3',
  '@sm': {
    alignItems: 'center',
  }
})

export const InfoContactsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$2',
  alignItems: 'flex-end',
  '@sm': {
    alignItems: 'center',
  }
})

export const EmailContainer = styled('a', {
  fontFamily: '$default',
  fontSize: '$md',
  fontStyle: 'normal',
  fontWeight: '$regular',
  color: '$neutral-4',
  lineHeight: '$short',
})

export const PhoneContainer = styled('a', {
  fontFamily: '$default',
  fontSize: '$md',
  fontStyle: 'normal',
  fontWeight: '$regular',
  color: '$neutral-4',
  lineHeight: '$short'
})

export const SocialsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '$3',
  '@sm': {
    gap: '$4',
  }
})

export const SocialContainer = styled('a', {
  color: '$neutral-4',
})
