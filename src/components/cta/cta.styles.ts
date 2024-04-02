import { styled } from '@/lib/stitches'
import Image from 'next/image'

export const SectionContainer = styled('section', {
  display: 'flex',
  width: '90rem',
  padding: '$40 0',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '$neutral-0',
  alignItems: 'center',
  margin: '0 auto',
  gap: '1.5rem',
  '@xs': {
    width: '22.5rem',
    padding: '$10 $6',
  }
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
  justifyContent: 'center',
})

export const TitleContainer = styled('h2', {
  textAlign: 'center',
  fontSize: '$4xl',
  fontFamily: '$default',
  fontStyle: 'normal',
  fontWeight: '$semibold',
  lineHeight: '$base',
  letterSpacing: ' -0.05rem',
  color: '$neutral-4',
  '@sm': {
    fontSize: '$3xl',
    lineHeight: '130%',
    letterSpacing: ' -0.03rem',
  },
  '@xs': {
    fontSize: '$2xl',
  }
})

export const TextContainer = styled('p', {
  alignSelf: 'stretch',
  fontSize: '$xl',
  textAlign: 'center',
  fontFamily: '$default',
  fontStyle: 'normal',
  fontWeight: '$regular',
  lineHeight: '$short',
  color: '$neutral-4',
  padding: '0 12.5%',
  margin: '0 auto',
  '@sm': {
    padding: '0',
    width: '30rem',
    fontSize: '$2xl',
  },
  '@xs': {
    fontSize: '$md',
    width: '19.5rem',
  }

})

export const ButtonContainer = styled('button', {
  display: 'flex',
  height: '3.25rem',
  padding: '$3 $8',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  borderRadius: '18.75rem',
  backgroundColor: '$primary',
  boxShadow: '4px 4px 4px 0px rgba(64,64,64,0.10)',
  color: '$neutral-0',
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

  '@sm': {
    height: '$10',
    padding: '$3 $6',
    alignSelf: 'stretch',
    margin: '0 auto',
    fontSize: '$xl',
  },

  '@xs': {
    fontSize: '$md',
    margin: '0',
  }
})

export const Hands = styled(Image, {
  height: '$4'
})
