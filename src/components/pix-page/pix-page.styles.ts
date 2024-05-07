import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  width: '100vw',
  height: '36.625rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$6',
  fontFamily: '$default',
  backgroundColor: '$neutral-0',
  color: '$neutral-4',
  padding: '$16 $56',

  '@sm': {
    height: 'auto',
    padding: '$10 $6',
  }
})

export const BoxContainer = styled('div', {
  display: 'flex',
  height: '27.375rem',
  width: '62rem',
  justifyContent: 'center',
  alignItems: 'flex-start',
  position: 'relative',
  gap: '$12',

  '@sm': {
    width: '19.5rem',
    height: '35rem',
  }
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

  '@sm': {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export const ContentContainer = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$6',
  alignSelf: 'stretch',
  height: '21.625rem',
  width: '35rem',

  '@sm': {
    alignItems: 'center',
  }
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

  '@sm': {
    height: 'auto',
    width: '19.5rem',
    fontSize: '$2xl',
    lineHeight: '$shorter',
    letterSpacing: '-0.03rem',
    textAlign: 'center',
  }
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

  p: {
    marginBottom: '$6',
  },

  '@sm': {
    width: '19.5rem',
    height: 'auto',
    fontSize: '$xl',
    textAlign: 'start',
  }
})

export const ValuesContainer = styled('span', {
  display: 'flex',
  width: '35rem',
  height: '3.475rem',
  alignItems: 'flex-start',
  gap: '$3',

  '@sm': {
    width: '19.5rem',
    height: 'auto',
    fontSize: '$xl',
    gap: '$4',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems:'center',
  }
})

export const AltDonationContainer = styled('div', {
  width: '35rem',
  heigth: '3.475rem',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$6',

  '@sm': {
    width: '19.5rem',
    height: 'auto',
    gap: '$3',
  }
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

  '@sm': {
    height: 'auto',
    width: '19.5rem',
    gap: '$1',
  }
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
  boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.12)',

  '&:focus': {
    backgroundColor: '$primary',
  },

  '&:hover': {
    backgroundColor: '$primary',
  },

  '&:active': {
    backgroundColor: '$primary',
  },

  '@sm': {
    width: '9rem',
  }
})

export const AltButtonContainer = styled('button', {
  display: 'flex',
  padding: '$2 $7',
  justifyContent: 'center',
  alignItems: 'center',
  width: '11.6875rem',
  height: '3.4375rem',
  gap: '$1',
  backgroundColor: '$neutral-0',
  border: '1px solid $neutral-4',
  borderRadius: '$xs',
  color: '$neutral-4',
  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$short',
  boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.12)',
  textWrap: 'noWrap',

  '&:focus': {
    backgroundColor: '$primary',
    border: 'none',
  },

  '&:hover': {
    backgroundColor: '$primary-variant-1',
    border: 'none',
  },

  '&:active': {
    backgroundColor: '$primary',
    border: 'none',
  },

  '@sm': {
    height: '3.4375rem',
    width: '9.375rem',
  }
})

export const ImageContainer = styled('div', {
  '@sm': {
      display: 'none',
    }  
})
