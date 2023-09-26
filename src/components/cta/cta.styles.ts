import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  width: '100vw',
  height: '34.23rem',
  backgroundColor: '$neutral-0',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
  padding: '5rem 14.9rem',
  border: '1px solid $black'
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
  height: 'auto',
  alignItems: 'center',
  gap: '1.5rem',
})

export const TitleContainer = styled('h2', {
  textAlign: 'center',
  fontSize: '$4xl',
  fontFamily: '$default',
  fontStyle: 'normal',
  fontWeight: '$semibold',
  lineHeight: '$short',
  color: '$neutral-4',
})

export const TextContainer = styled('p', {
  width: '35rem',
  fontSize: '$lg',
  textAlign: 'center',
  fontFamily: '$default',
  fontStyle: 'normal',
  fontWeight: '$regular',
  lineHeight: '$short',
  color: '$neutral-4',
})

export const ButtonContainer = styled('button', {
  display: 'flex',
  width: '11.25rem',
  height: '2.5rem',
  padding: '0.75rem 1.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
  color: '$neutral-0',
  backgroundColor: '$primary',
  borderRadius: '18.75rem',
  boxShadow: '4px 4px 4px 0px rgba(64,64,64,0.10)',
  border: 'none',
  textAlign: 'center',
  fontSize: '$md',
  fontStyle: 'normal',
  fontFamily: '$default',
  fontWeight: '$semibold',
  lineHeight: '$shorter',

  '&:hover': {
    backgroundColor: '$primary-variant-2',
  },

  '&:active': {
    backgroundColor: '$primary-variant-1',
  },
})
