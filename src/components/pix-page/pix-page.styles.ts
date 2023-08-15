import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  width: '100vw',
  height: '23rem',
  padding: '$10 $56',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$6',
  fontFamily: '$default',
  color: '$neutral-4',
})

export const HelpContainer = styled('div', {
  display: 'flex',
  height: '18rem',
  width: '61.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$12',
})

export const ContentContainer = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  height: '18rem',
  width: '43rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$6',
  fontFamily: '$default',
  color: '$neutral-4',
})

export const TitleContainer = styled('h2', {
  width: '43rem',
  height: '2.625rem',
  textAlign: 'center',
  fontSize: '$3xl',
  fontWeight: '$semibold',
  lineHeight: '$short',
  whiteSpace: 'nowrap',
})

export const PixContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '15.5rem',
  height: '18rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$3',

  img: {
    width: '15.5rem',
    height: '15.5rem',
  },
})

export const PixTextContainer = styled('h3', {
  width: '15.5rem',
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
  width: '43rem',
  height: '7.9375rem',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$shorter',
})

export const AltDonationContainer = styled('div', {
  width: '43rem',
  heigth: '12.875rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '$md',
  fontWeight: '$semibold',
  lineHeight: '$shorter',
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
  color: '$neutral-0',
  backgroundColor: '$primary',
  borderRadius: '$xl',
  border: 'none',
  fontSize: '$md',
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
