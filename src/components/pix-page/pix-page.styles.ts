import { styled } from '@/lib/stitches'

export const PageContainer = styled('section', {
  display: 'flex',
  width: '100vw',
  height: '35.5625rem',
  padding: '$20 $80',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$6',
})

export const HelpContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '25.5625rem',
  width: '44.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$6',
  fontFamily: '$default',
  color: '$neutral-4',
})

export const TitleContainer = styled('h2', {
  width: '13.9375rem',
  height: '2.625rem',
  textAlign: 'center',
  fontSize: '$3xl',
  fontWeight: '$semibold',
  lineHeight: '$short',
  whiteSpace: 'nowrap',
})

export const ContentContainer = styled('div', {
  display: 'flex',
  width: '44.5rem',
  height: '15.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$6',
})

export const PixContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '13rem',
  height: '15.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$3',
})

export const PixTextContainer = styled('h3', {
  width: '12.125rem',
  height: '1.75rem',
  textAlign: 'center',
  fontSize: '$xl',
  fontWeight: '$semibold',
  lineHeight: '$short',
})

export const SubtitleContainer = styled('h4', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '30rem',
  height: '9.5rem',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$shorter',
})

export const AltDonationContainer = styled('div', {
  width: '12.875rem',
  heigth: '4.4375rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '$3xl',
  fontWeight: '$semibold',
  lineHeight: '$short',
  gap: '$3',
})

export const AltTextContainer = styled('h5', {
  width: '12.875rem',
  height: '1.1875rem',
  textAlign: 'center',
  fontSize: '$md',
  fontWeight: '$semibold',
  lineHeight: '$shorter',
})

export const ButtonContainer = styled('button', {
  display: 'flex',
  width: '10rem',
  height: '2.5rem',
  padding: '$3 $6',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  color: '$neutral-4',
  backgroundColor: '$tertiary',
  borderRadius: '$xl',
  border: 'none',
  fontSize: '$md',
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
