import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  border: '1px solid black',
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
})

export const CarouselContainer = styled('div', {
  border: '1px solid red',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80rem',
  height: '26rem',
  gap: '$6',
  // flexWrap: 'nowrap',
})

export const CarouselContent = styled('div', {
  border: '1px solid red',
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
  width: '61.75rem',
  height: '26rem',
  gap: '$20',

  img: {
    width: '26rem',
    height: '26rem',
    borderRadius: '$xs',
  },
})

export const SliderContainer = styled('div', {
  border: '1px solid red',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '28.375rem',
  height: '19.25rem',
  gap: '$8',
})

export const SlideContainer = styled('span', {
  border: '1px solid blue',
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
        width: '2rem',
        backgroundColor: '$primary',
      },
    },
  },
})

export const TitleContainer = styled('h2', {
  border: '1px solid blue',
  width: '28.375rem',
  height: '3.75rem',
  fontSize: '$4xl',
  fontWeight: '$semibold',
  lineHeight: '$base',
  whiteSpace: 'nowrap',
})

export const SubtitleContainer = styled('h3', {
  border: '1px solid blue',
  width: '28.375rem',
  height: '6.875rem',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$short',
})

export const SignatureContainer = styled('h4', {
  width: '28.375rem',
  height: '3.125rem',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$short',
})
