import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '22.25rem',
  backgroundColor: '$neutral-0',
  fontFamily: '$default',
})

export const CarouselContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '42rem',
  height: '20.75rem',
  flexWrap: 'nowrap',
  gap: '$10',
})

export const CarouselContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '42rem',
  height: '15.625rem',
  gap: '$6',
})

export const SlideContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '42rem',
  height: '10.6875rem',
  gap: '$12',
})

export const NavigationContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '42rem',
  height: '0.625rem',
  gap: '0.625rem',
  marginTop: '$2',
})

export const DotContainer = styled('button', {
  width: '0.625rem',
  height: '0.625rem',
  borderRadius: '$full',
  backgroundColor: '$primary',
  marginBottom: '$10',

  '&:focus': {
    backgroundColor: '$neutral-4',
  },
})

export const TitleContainer = styled('h2', {
  width: '21.625rem',
  height: '2.625rem',
  fontSize: '$3xl',
  fontWeight: '$semibold',
  lineHeight: '$shorter',
  whiteSpace: 'nowrap',
})

export const SpanContainer = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  width: '29rem',
  height: '10.6875rem',
  alignItems: 'flex-start',
  gap: '$6',
})

export const SubtitleContainer = styled('h3', {
  width: '29rem',
  height: '8.3125rem',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$shorter',
})

export const SignatureContainer = styled('h4', {
  width: '13.1875rem',
  height: '0.875rem',
  fontSize: '$xs',
  fontWeight: '$regular',
  lineHeight: '$shorter',
})
