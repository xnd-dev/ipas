import { styled } from '@/lib/stitches'

export const HeaderContainer = styled('header', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '$360',
  height: '$20',
  padding: '$4 $30',
  gap: '$68.5',
  backgroundColor: '$neutral-0',
  alignItems: 'center',
  justifyContent: 'center',
})

export const HorizontalContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '$300',
  height: '$12',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const OptionsContainer = styled('div', {
  display: 'flex',
  width: '$160',
  height: '$12',
  gap: '$6',
  alignItems: 'center',
  justifyContent: 'center',
})

export const NavContainer = styled('a', {
  color: '$primary',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
})

export const ButtonContainer = styled('button', {
  display: 'flex',
  boxSizing: 'boder-box',
  width: '$37',
  height: '$12',
  padding: '$3 $6',
  gap: '$2',
  border: 'none',
  borderRadius: '$xl',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$primary',
  color: '$neutral-0',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$semibold',
  lineHeight: '$base',
  whiteSpace: 'nowrap',
})
