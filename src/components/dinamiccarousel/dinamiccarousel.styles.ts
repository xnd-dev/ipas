import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '36rem',
  padding: '$20',
  gap: '$20',
  backgroundColor: '$tertiary-variant',
  fontFamily: '$default',
  overflow: 'visible',
  zIndex: '0',
  
  '@sm': {
    height: '49.5625rem',
    padding: '5rem 1.5rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    alignSelf: 'stretch',
  },
})

export const CarouselContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80rem',
  height: '26rem',
  gap: '$6',
  
  '@sm': {
    flexDirection: 'column',
    height: '39.5625rem',
    justifyContent: 'flex-start',
    gap: '2rem',
  }
})

export const CarouselContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent:'left',
  width: '62rem',
  height: '26rem',
  gap: '$20',

  '@sm': {
    flexDirection: 'column',
    width: '19.5rem',
    height: '39.5625rem',
    gap: '$6',
  }
})

export const ImageContainer = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '28.375rem',
  height: '36rem',
  position: 'relative',
  
  '& img#rectangle': {
    height: '40rem',
    maxWidth: '40rem',
    marginTop: '-3rem',
    position: 'relative',
    left: '4%',
  },

  '& img#quote': {
    width: '3.5rem',
    height: '3rem',
    position: 'absolute',
    left: '60%',
    top: '4%',
  },

  '& img#avatar': {
    width: '28.375rem',
    height: '26rem',
    borderRadius: '$lg',
    position: 'absolute',
    left: '0%',
    transitionDuration:'500ms',
  },

  '& img#square': {
    width: '9.7rem',
    height: '9.7rem',
    position: 'absolute',
    left: '-5%',
    top: '67%',
  },

  '@lg': {
    '& img#rectangle':{
      display: 'none',
    },

    '& img#quote': {
      display: 'none',
    },
    
    '& img#square': {
      display: 'none',
    }, 
  },

  '@sm': {
    maxHeight: '18.375rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$2',

    img: {
      display: 'block',
    },

    '& img#rectangle':{
      left: '6%',
      top: '1%',
      height: '24rem',
      borderRadius: '$xl',
      display: 'block',
    },

    '& img#quote': {
      left: '83%',
      top: '-18%',
      display: 'block',
    },

    '& img#avatar': {
      height: '18.375rem',
      objectFit: 'cover',
    },
    
    '& img#square': {
      width: '6.82rem',
      left: '1%',
      top: '68%',
      display: 'block',
    }, 
  },
})

export const SliderContainer = styled('div', {
  display: 'flex', 
  alignItems: 'center', 
  textAlign: 'center', 
  
  '@sm': {
    height: '24.375rem',
    alignItems: 'flex-start',
    flexDirection:'column',
    gap: '$6',
    alignSelf: 'stretch',
  },
})

export const SlideContainer = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '28.375rem',
  height: '11rem',
  gap: '$4',

  '@sm': {
    height: 'auto',
    alignItems: 'flex-start',
    gap: '$3',
    alignSelf: 'stretch',
  },
})

export const CaretContainer = styled('span', {
  color: '$primary',
  width: '3rem',
  height: '3rem',
  zIndex: '1',

  '@sm': {
    display: 'none',
  },
})

export const NavigationContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center', 
  justifyContent:'left',
  width: '100%',
  marginTop: '20px',

  '@sm': {
    width: '100%',
  }
})

export const DotContainer = styled('div', {
  width: '0.5rem',
  height: '0.5rem',
  borderRadius: '$full',
  backgroundColor: '$neutral-4',
  margin: '0 5px',
  cursor: 'pointer',
  zIndex: '10',

  variants: {
    active: {
      true: {
        backgroundColor: '$primary',
        width: '2rem',
      },
    },
  },

  '@sm': {
    backgroundColor: '$neutral-0',

  }
})

export const TitleContainer = styled('h2', {
  width: '28.375rem',
  height: '3.75rem',
  fontSize: '$4xl',
  fontWeight: '$semibold',
  lineHeight: '$base',
  whiteSpace: 'nowrap',
  marginBottom:'2rem',
  textAlign:'left',

  '@sm': {
    height: 'auto',
    textAlign: 'center',
    fontSize: '$2xl',
    lineHeight: '$shorter',
    letterSpacing: '-0.03rem',
  }
})

export const comments = styled('h3', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  width: '33.375rem',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$short',
  gap: '$4',
  textAlign:'left',
  paddingRight:'6rem',
  marginBottom:'1rem',

  '@sm': {
    height: '10.25rem',
    paddingRight:'0',
    fontSize: '$md',
    lineHeight: '$short',
    letterSpacing: '-0.03rem',
  }
})

export const SignatureContainer = styled('div', {
  width: '28.375rem',
  height: '3.125rem',
  fontSize: '1rem',
  fontWeight: '$regular',
  textAlign:'left',


  '@sm': {
    height: 'auto',
    fontSize: '$md',
  }
})

export const SignatureTextContainer = styled('h4', {
  height: '1.55rem',
  width: '28.375rem',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$short',
})
