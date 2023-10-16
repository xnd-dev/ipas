import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  flexDirection: 'column',
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
})

export const CarouselContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80rem',
  height: '26rem',
  gap: '$6',
})

export const CarouselContent = styled('div', {
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
  width: '61.75rem',
  height: '26rem',
  gap: '$20',
})

export const ImageContainer = styled('span', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '28.375rem',
  height: '36rem',

  '& img#rectangle': {
    height: '120%',
    width: '120%',
    position: 'absolute',
    left: '10%',
  },

  '& img#quote': {
    width: '3rem',
    height: '3rem',
    position: 'absolute',
    left: '27%',
    top: '-58%',
  },

  '& img#avatar': {
    width: '28.375rem',
    height: '26rem',
    borderRadius: '$lg',
    position: 'absolute',
    left: '0%',
  },

  '& img#square': {
    width: '9.7rem',
    height: '9.7rem',
    position: 'absolute',
    left: '-15%',
    top: '43%',
  },
})

export const SliderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '28.375rem',
  height: '19.25rem',
  gap: '$8',
})

export const SlideContainer = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '28.375rem',
  height: '11rem',
  gap: '$4',
})

export const CaretContainer = styled('span', {
  color: '$primary',
  width: '3rem',
  height: '3rem',
})

export const NavigationContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '19.25rem',
  height: '0.5rem',
  gap: '$2',
})

export const DotContainer = styled('button', {
  width: '0.5rem',
  height: '0.5rem',
  borderRadius: '$full',
  backgroundColor: '$neutral-4',

  variants: {
    focus: {
      true: {
        backgroundColor: '$primary',
      },
    },

    active: {
      true: {
        backgroundColor: '$primary',
      },
    },
  },
})

export const TitleContainer = styled('h2', {
  width: '28.375rem',
  height: '3.75rem',
  fontSize: '$4xl',
  fontWeight: '$semibold',
  lineHeight: '$base',
  whiteSpace: 'nowrap',
})

export const SubtitleContainer = styled('h3', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  width: '27.375rem',
  height: '6.875rem',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$short',
  gap: '$4',
})

export const SignatureContainer = styled('div', {
  width: '28.375rem',
  height: '3.125rem',
})

export const SignatureTextContainer = styled('h4', {
  height: '1.55rem',
  width: '28.375rem',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$short',
})
