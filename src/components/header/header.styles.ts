import { styled } from '@/lib/stitches'

export const HeaderContainer = styled('header', {
  display: 'flex',
  position:'fixed',
  boxSizing: 'border-box',
  width: '100vw',
  height: '5.5rem',
  padding: '$6 $56',
  gap: '$72',
  backgroundColor: '$neutral-0',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '2',
  
  '@sm': {
    background: 'none',
    position:'absolute',
    justifyContent: 'space-between',
    padding: '$5 $12',
    height: 'auto',
    width: 'auto',
  },
})

export const HorizontalContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '61.5rem',
  minWidth: '61.5rem',
  height: '2.5rem',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@sm': {
    width:'39rem',
    minWidth:'22.56rem',
    height: 'auto',
  },

})

export const ImageContainer = styled('div', {
  width: '9rem',
  height: '2.5rem',


  '@sm': {
    height:'auto',
    width: 'auto',

    img: {
      height: '4rem',
      width: '12rem',
    }
  },

})

export const OptionsContainer = styled('div', {
  display: 'flex',
  width: '44rem',
  height: '3rem',
  gap: '$6',
  alignItems: 'center',
  justifyContent: 'center',

  '@sm': {
    display: 'none',
  }
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

export const MenuContainer = styled('button', {
  display: 'none',
  background: 'none',
  color:'White',
  height: '$20',
  width: '$20',

  img: {
    width: '$20',
    height: '$20',
  },

  '@sm': {
    display: 'block',
  }
})