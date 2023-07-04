import { styled } from '@/lib/stitches'
import ImageBackground from '../../../public/background2section.png'

export const SectionContainer = styled('section', {
  display: 'flex',
  width: '100vw',
  Height: '$160',
  backgroundImage: `url(${ImageBackground.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '$neutral-0',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$default',
  gap: '2.5rem',
})

export const ContentContainer = styled('div', {
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '$16',
})

export const TitleContainer = styled('div', {
  display: 'flex',
  width: 'fit-content',
  margin: '0 auto',
  padding: '0.625rem',
  flexDirection: 'column',
  gap: '1rem',
  h1: {
    textAlign: 'center',
    justifyItems: 'center',
    fontFamily: '$default',
    fontWeight: '$semibold',
    fontSize: '3rem',
    lineHeight: '$short',
    color: 'White',
  },
  h4: {
    textAlign: 'center',
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '2rem',
    lineHeight: '$base',
    color: 'White',
  },
})

export const OverviewContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '5rem',
  gap: '10rem',
})

export const CardContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  height: '60%',
  padding: '0 4px',
  gap: '2.5rem',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '50%',
  height: 'auto',
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '1.5rem',
  },
})

export const DescriptionContainer = styled('div', {
  width: '50%',
  maxWidth: '50%',
  height: 'auto',
  gap: '1,5rem',
  p: {
    fontFamily: '$default',
    fontSize: '1.3rem',
    fontWeight: '$regular',
    lineHeight: 'shorter',
    color: 'White',
    marginBottom: '$4',
  },
  h3: {
    textAlign: 'initial',
    fontFamily: '$default',
    fontSize: '2rem',
    fontWeight: '$semibold',
    lineHeight: '$short',
    color: 'White',
    marginBottom: '$5',
  },
})
