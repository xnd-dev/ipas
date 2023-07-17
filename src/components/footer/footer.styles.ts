import { styled } from '@/lib/stitches'

export const HeaderContainer = styled('footer', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100vw',
  height: 'auto',
  padding: '1.5rem 14.3rem',
  backgroundColor: '$primary',
  alignItems: 'center',
  justifyContent: 'space-between',
  bottom: '0',
  borderTop: '1px solid white',
})

export const HorizontalContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '61.5rem',
  height: '8.875',
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
  color: '$neutral-0',
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
  color: '$neutral-0',
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
})

export const EmailContainer = styled('p', {
  fontFamily: '$default',
  fontSize: '$md',
  fontStyle: 'normal',
  fontWeight: '$regular',
  lineHeight: '$shorter',
})

export const PhoneContainer = styled('p', {
  fontFamily: '$default',
  fontSize: '$md',
  fontStyle: 'normal',
  fontWeight: '$regular',
  lineHeight: '$shorter',
})

export const SocialsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: 'auto',
  height: 'auto',
  gap: '0.75rem',
})
