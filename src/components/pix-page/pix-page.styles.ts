import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  width: '100vw',
  height: '36.375rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$6',
  fontFamily: '$default',
  color: '$neutral-4',
  padding: '$16 $56',
})

export const BoxContainer = styled('div', {
  display: 'flex',
  height: '27.375rem',
  width: '62rem',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '$12',
})

export const HelpContainer = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  height: '27.375rem',
  width: '35rem',
  alignItems: 'flex-start',
  gap: '$8',
  fontFamily: '$default',
  color: '$neutral-4',
})

export const ContentContainer = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$6',
  alignSelf: 'stretch',
  height: '21.625rem',
  width: '35rem',
})

export const TitleContainer = styled('h2', {
  width: 'auto',
  maxWidth: '35rem',
  height: '3.75rem',
  textAlign: 'center',
  fontSize: '$4xl',
  fontWeight: '$semibold',
  lineHeight: '$base',
  whiteSpace: 'nowrap',
})

export const SubtitleContainer = styled('h4', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '35rem',
  height: '8.75rem',
  fontSize: '$xl',
  fontWeight: '$regular',
  lineHeight: '$short',
})

export const ValuesContainer = styled('span', {
  display: 'flex',
  width: '35rem',
  height: '3.475rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$3',
})

export const AltDonationContainer = styled('div', {
  width: '35rem',
  heigth: '3.475rem',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$6',
})

export const MonthlyDonationContainer = styled('h5', {
  display: 'flex',
  width: 'auto',
  maxWidth: '35rem',
  height: '1.5rem',
  textAlign: 'center',
  alignItems: 'center',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$short',
  gap: '$2',

  input: {
    width: '1.25rem',
    height: '1.25rem',
    border: '2px solid $neutral-4',
    borderRadius: '$xs',
  },
})

export const ButtonContainer = styled('button', {
  display: 'flex',
  width: '8.4375rem',
  height: '3.4375rem',
  padding: '$3 $6',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  color: '$neutral-0',
  backgroundColor: '$primary-variant-1',
  borderRadius: '$xs',
  border: 'none',
  fontSize: '$2xl',
  fontFamily: '$default',
  fontWeight: '$bold',
  lineHeight: '$short',

  '&:focus': {
    backgroundColor: '$primary',
  },

  '&:hover': {
    backgroundColor: '$primary',
  },

  '&:active': {
    backgroundColor: '$primary',
  },
})

export const AltButtonContainer = styled('button', {
  display: 'flex',
  padding: '$2 $7',
  justifyContent: 'center',
  alignItems: 'center',
  width: '10.4375rem',
  height: '3.4375rem',
  gap: '$2',
  backgroundColor: '$neutral-0',
  border: '1px solid $neutral-4',
  borderRadius: '$xs',
  color: '$neutral-4',
  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$short',
})
