import { styled } from '@/lib/stitches'

export const HeaderContainer = styled('header', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100vw',
  height: '5rem',
  padding: '$4 $56',
  gap: '$72',
  backgroundColor: '$primary',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
})

export const HorizontalContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '80rem',
  height: '3rem',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const OptionsContainer = styled('div', {
  display: 'flex',
  width: '44rem',
  height: '3rem',
  gap: '$6',
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

export const ButtonContainer = styled('button', {
  display: 'flex',
  boxSizing: 'boder-box',
  width: '9.5rem',
  height: '2.5rem',
  padding: '$3 $6',
  gap: '$1',
  border: 'none',
  borderRadius: '$xl',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$tertiary',

  '&:hover': {
    backgroundColor: '$tertiary-variant',
  },

  '&:active': {
    backgroundColor: '$tertiary',
  },
})

export const InsideTextContainer = styled('span', {
  width: '5,3125rem',
  height: '1,1875rem',
  color: '$neutral-4',
  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$semibold',
  lineHeight: '$shorter',
  whiteSpace: 'nowrap',
})
