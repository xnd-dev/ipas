import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  width: '100vw',
  height: 'auto',
  backgroundColor: '$primary',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  alignItems: 'center',
  gap: '1.5rem',
  padding: '5rem 24.1rem 5rem 24.1rem',
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
  fontSize: '$3xl',
  fontFamily: '$default',
  fontStyle: 'normal',
  fontWeight: '$semibold',
  lineHeight: '$short',
  color: '$neutral-0',
})

export const TextContainer = styled('p', {
  width: '40rem',
  fontSize: '$xl',
  textAlign: 'center',
  fontFamily: '$default',
  fontStyle: 'normal',
  fontWeight: '$regular',
  lineHeight: '$short',
  color: '$neutral-0',
})

export const ButtonContainer = styled('button', {
  display: 'flex',
  width: '11.25rem',
  height: '2.5rem',
  padding: '0.75rem 1.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
  color: '$neutral-4',
  backgroundColor: '$tertiary',
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
    backgroundColor: '$tertiary-variant',
  },

  '&:active': {
    backgroundColor: '$tertiary',
  },
})
