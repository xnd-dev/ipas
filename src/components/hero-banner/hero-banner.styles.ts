import { styled } from '@/lib/stitches'
import handsTogether from '../../../public/hands-together.svg'

export const SectionContainer = styled('section', {
  display: 'flex',
  height: '40rem',
  width: '100vw',
  backgroundImage: `url(${handsTogether.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '$neutral-0',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$default',
})

export const ContentContainer = styled('div', {
  display: 'flex',
  width: '$44rem',
  height: '24rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$10',
  textAlign: 'center',
})

export const TitleContainer = styled('h1', {
  fontSize: '$md',
  fontWeight: '$medium',
  lineHeight: '$shorter',
})

export const SubtitleContainer = styled('h2', {
  fontSize: '$4xl',
  fontWeight: '$semibold',
  lineHeight: '$shorter',
})

export const SpanContainer = styled('span', {
  color: '$tertiary',
})

export const TextContainer = styled('h3', {
  width: '36rem',
  fontSize: '$xl',
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
