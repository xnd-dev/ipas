import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  width: '100vw',
  Height: '100vh',
  backgroundColor: '$tertiary-variant',
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
  marginBottom: '1.5rem',
  flexDirection: 'column',
  gap: '0.75rem',
  textAlign: 'center',
  alignItems: 'center',
  h2: {
    height: '3rem',
    fontFamily: '$default',
    fontWeight: '$semibold',
    fontSize: '2rem',
    lineHeight: '$short',
    color: '$neutral-4',
  },
  h4: {
    height: '1.875rem',
    fontFamily: '$default',
    fontWeight: '$regular',
    fontSize: '1.25rem',
    lineHeight: '$base',
    color: '$neutral-4',
  },
})

export const OverviewContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '5rem',
  gap: '1.5rem',
})

export const CardContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  height: '60%',
  padding: '0 4px',
  gap: '1.5rem',
  backgroundColor: '$neutral-0',
  boxShadow: '4px 4px 4px 0px rgba(64, 64, 64, 0.1)',
  borderRadius: '1.5rem',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '50%',
  height: 'auto',
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
})

export const DescriptionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  maxWidth: '50%',
  height: 'auto',
  paddingTop: '1.5rem',
  paddingBottom: '1.5rem',
  paddingRight: '1.5rem',
  gap: '0.75',
  flex: '1 0 0',
  p: {
    alignItems: 'flex-start',
    height: '5rem',
    fontFamily: '$default',
    fontSize: '1rem',
    fontWeight: '$regular',
    lineHeight: 'shorter',
    color: '$neutral-4',
  },
  h3: {
    alignItems: 'flex-start',
    fontFamily: '$default',
    fontSize: '1.5rem',
    fontWeight: '$semibold',
    lineHeight: '$short',
    color: '$neutral-4',
  },
})
