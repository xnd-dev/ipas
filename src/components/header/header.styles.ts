import { styled } from '@/lib/stitches'

export const HeaderContainer = styled('header', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100vw',
  height: '5.5rem',
  padding: '$6 $56',
  gap: '$72',
  backgroundColor: '$neutral-0',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: '1px solid',
  borderColor: '$neutral-4',
  position: 'fixed',
  zIndex: '5',
})

export const HorizontalContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '80rem',
  height: '2.5rem',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ImageContainer = styled('div', {
  width: '9rem',
  height: '2.5rem',
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
  color: '$neutral-4',
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
  borderRadius: '$full',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$neutral-0',
  backgroundColor: '$primary',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$primary-variant-2',
  },

  '&:active': {
    backgroundColor: '$primary-variant-1',
  },
})

export const InsideTextContainer = styled('span', {
  width: '5,3125rem',
  height: '1,1875rem',
  color: '$neutral-0',
  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$semibold',
  lineHeight: '$shorter',
  whiteSpace: 'nowrap',
})
