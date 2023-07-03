import { styled } from '@/lib/stitches'

export const HeaderContainer = styled('header', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100vw',
  height: '5rem',
  padding: '$4 $30',
  gap: '$72',
  backgroundColor: '$primary',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
})

export const HorizontalContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '75rem',
  height: '3rem',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const OptionsContainer = styled('div', {
  display: 'flex',
  width: '40rem',
  height: '3rem',
  gap: '$6',
  alignItems: 'center',
  justifyContent: 'center',
})

export const NavContainer = styled('a', {
  color: '$neutral-0',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
})

export const ButtonContainer = styled('button', {
  display: 'flex',
  boxSizing: 'boder-box',
  width: '8.75rem',
  height: '2.5rem',
  padding: '$3 $6',
  gap: '$2',
  border: 'none',
  borderRadius: '$xl',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$tertiary',
  color: '$neutral-4',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$semibold',
  lineHeight: '$base',
  whiteSpace: 'nowrap',

  '&:hover': {
    backgroundColor: '$tertiary-variant',
  },

  '&:active': {
    backgroundColor: '$tertiary',
  },
})
