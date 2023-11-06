import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  width: '100vw',
  height: '30.5rem',
  backgroundColor: '$neutral-0',
  color: '$neutral-4',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$default',
  gap: '$3',
  padding: '$10 $96 $10 $96',
})

export const ContentContainer = styled('div', {
  display: 'flex',
  width: '$41.5rem',
  height: '22rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
  textAlign: 'center',
  marginTop: '$20',
  marginBot: '$10',
})

export const TitleContainer = styled('h1', {
  fontSize: '$md',
  fontWeight: '$medium',
  lineHeight: '$shorter',
})

export const SubtitleContainer = styled('h2', {
  width: '42.5rem',
  fontSize: '$4xl',
  fontWeight: '$semibold',
  lineHeight: '$shorter',
})

export const SpanContainer = styled('span', {
  color: '$primary',
})

export const TextContainer = styled('h3', {
  width: '36rem',
  fontSize: '$xl',
  fontWeight: '$regular',
  lineHeight: '$short',
})

export const ButtonContainer = styled('button', {
  display: 'flex',
  width: '10rem',
  height: '2.5rem',
  padding: '$3 $6',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  color: '$neutral-0',
  backgroundColor: '$primary',
  borderRadius: '$full',
  border: 'none',
  fontSize: '$md',
  fontFamily: '$default',
  fontWeight: '$semibold',
  lineHeight: '$shorter',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$primary-variant-2',
  },

  '&:active': {
    backgroundColor: '$primary-variant-1',
  },
})
