import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  Height: '63rem',
  padding: '5rem 19.25rem',
  backgroundColor: '$tertiary-variant',
  backgroundSize: 'cover',
  color: '$neutral-0',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$default',
  gap: '1.5rem',
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  width: 'auto',
  height: 'auto',
  alignItems: 'center',
  gap: '1.5rem',
})

export const TitleAndSubtitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.75rem',
  marginBottom: '1.5rem',
})

export const SectionTitleContainer = styled('div', {
  width: 'auto',
  height: 'auto',
  flexDirection: 'column',
  textAlign: 'center',
  fontFamily: '$default',
  fontWeight: '$semibold',
  fontSize: '$3xl',
  lineHeight: '$short',
  color: '$neutral-4',
})
export const SectionSubtitleContainer = styled('div', {
  width: 'auto',
  height: 'auto',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$xl',
  lineHeight: '$base',
  color: '$neutral-4',
})

export const OverviewContainer = styled('div', {
  width: 'auto',
  height: 'auto',
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.5rem',
})

export const CardContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  width: 'auto',
  height: 'auto',
  alignItems: 'flex-start',
  gap: '1.5rem',
  backgroundColor: '$neutral-0',
  boxShadow: '4px 4px 4px 0px rgba(64, 64, 64, 0.1)',
  borderRadius: '1.5rem',
})

export const ImageContainer = styled('div', {
  flex: '1 0 0',
  alignSelf: 'stretch',
  width: '100%',
  height: 'auto',
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '1.5rem',
  },
})

export const DescriptionContainer = styled('div', {
  display: 'flex',
  alignSelf: 'stretch',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  padding: '1.5rem 1.5rem 1.5rem 0rem',
  flex: '1 0 0',
  gap: '0.75rem',
})

export const TitleDescriptionContainer = styled('div', {
  width: '100%',
  height: 'auto',
  justifyContent: 'center',
  alignSelf: 'stretch',
  fontFamily: '$default',
  fontSize: '$2xl',
  fontWeight: '$semibold',
  lineHeight: '$short',
  color: '$neutral-4',
})

export const TextDescriptionContainer = styled('div', {
  width: '100%',
  height: 'auto',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: 'shorter',
  color: '$neutral-4',
})
