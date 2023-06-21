import { styled } from '@/lib/stitches'

export const HeaderContainer = styled('header', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  height: '$20',
  backgroundColor: '$neutral-0',
  gap: '17.125rem',
  padding: '$4 30 4 30',
})

export const HorizontalContainer = styled('div', {
  display: 'flex',
  gap: '22.875rem',
  alignItems: 'center',
  justifyContent: 'center',
})

export const OptionsContainer = styled('div', {
  display: 'flex',
  width: '39.875rem',
  height: '$12',
  gap: '$6',
  alignItems: 'center',
  justifyContent: 'center',
})

export const NavContainer = styled('a', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$short',
  color: '$pimary',
  textDecoration: 'none',
})

export const ButtonContainer = styled('button', {
  display: 'flex',
  width: '9.25rem',
  height: '$12',
  padding: '$3 6 3 6',
  gap: '$1',
  borderRadius: '$full',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$pimary',
  borderColor: '$pimary',
  borderStyle: 'none',
  color: '$neutral-0',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$semibold',
  lineHeight: '$base',
})
