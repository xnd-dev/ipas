import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '31.25rem',
  backgroundColor: '$neutral-0',
  fontFamily: '$default',
})

export const CarouselContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '61.5rem',
  height: '21.25rem',
  flexWrap: 'nowrap',
  gap: '$12',
})

export const CarouselContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '61.5rem',
  height: '15rem',
  gap: '$5',
})

export const SliderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '61.5rem',
  height: '13.125rem',
  gap: '$20',
})

export const CaretContainer = styled('span', {
  color: '$primary',
  width: '2.5rem',
  height: '2.5rem',
})

export const SlideContainer = styled('span', {
  display: 'flex',
  alignItems: 'center',
  width: '43rem',
  height: '13.125rem',
  gap: '$6',

  img: {
    width: '10rem',
    height: '11rem',
    borderRadius: '$lg',
  },
})

export const NavigationContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '61.5rem',
  height: '0.625rem',
  gap: '$2',
})

export const DotContainer = styled('button', {
  width: '0.625rem',
  height: '0.625rem',
  borderRadius: '$full',
  backgroundColor: '$primary',

  variants: {
    focus: {
      true: {
        backgroundColor: '$neutral-4',
      },
    },

    active: {
      true: {
        backgroundColor: '$neutral-4',
      },
    },
  },
})

export const TitleContainer = styled('h2', {
  width: '61.5rem',
  height: '3.25rem',
  fontSize: '$4xl',
  fontWeight: '$semibold',
  lineHeight: '$short',
  whiteSpace: 'nowrap',
})

export const SpanContainer = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  width: '30.5rem',
  height: '10.6875rem',
  alignItems: 'flex-start',
  gap: '$6',
})

export const SubtitleContainer = styled('h3', {
  width: '30.5rem',
  height: '8.4375rem',
  fontSize: '$lg',
  fontWeight: '$regular',
  lineHeight: '$short',
})

export const SignatureContainer = styled('h4', {
  width: '30.5rem',
  height: '1.5rem',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$short',
})
