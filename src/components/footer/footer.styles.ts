import { styled } from '@/lib/stitches'

export const FooterContainer = styled('footer', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100vw',
  height: 'auto',
  padding: '1.5rem 14.3rem',
  backgroundColor: '$neutral-0',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: '1px solid',
  borderColor: '$neutral-4',
})

export const HorizontalContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '61.5rem',
  height: '8.875rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: '0',
})

export const OptionsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '9.625rem',
  height: 'auto',
  gap: '0.75rem',
  alignItems: 'center',
  justifyContent: 'center',
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
  boxSizing: 'border-box',
  alignItems: 'center',
  width: 'auto',
  height: 'auto',
  gap: '0.75rem',
})

export const ContactsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  width: 'auto',
  height: 'auto',
  gap: '0.75rem',
})

export const TitleContainer = styled('h4', {
  fontFamily: '$default',
  fontSize: '$md',
  fontStyle: 'normal',
  fontWeight: '$semibold',
  lineHeight: '$shorter',
})

export const InfoContactsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  gap: '0.5rem',
  width: 'auto',
  height: 'auto',
  color: '$neutral-4',
})

export const EmailContainer = styled('a', {
  fontFamily: '$default',
  fontSize: '$md',
  fontStyle: 'normal',
  fontWeight: '$regular',
  lineHeight: '$shorter',
  color: '$neutral-4',
})

export const PhoneContainer = styled('a', {
  fontFamily: '$default',
  fontSize: '$md',
  fontStyle: 'normal',
  fontWeight: '$regular',
  lineHeight: '$shorter',
  color: '$neutral-4',
})

export const SocialsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: 'auto',
  height: 'auto',
  gap: '0.75rem',
})

export const SocialContainer = styled('a', {
  color: '$neutral-4',
})
