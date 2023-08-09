import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100vw',
  Height: '69.375rem',
  padding: '$20 $80',
  color: '$neutral-4',
  backgroundColor: '$neutral-0',
  backgroundSize: 'cover',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$default',
  gap: '$6',
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  width: '61.5rem',
  height: '64.375rem',
  alignItems: 'center',
  gap: '$6',
})

export const TitleAndSubtitleContainer = styled('div', {
  display: 'flex',
  height: '5.125rem',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3',
})

export const SectionTitleContainer = styled('div', {
  width: '61.5rem',
  height: '2.625rem',
  flexDirection: 'column',
  textAlign: 'center',
  fontWeight: '$semibold',
  fontSize: '$3xl',
  lineHeight: '$short',
})

export const SectionSubtitleContainer = styled('div', {
  width: 'auto',
  height: '1.75rem',
  fontWeight: '$regular',
  fontSize: '$xl',
  lineHeight: '$base',
})

export const OverviewContainer = styled('div', {
  width: '61.5rem',
  height: '57.75rem',
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$6',
})

export const CardContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  width: '61.5rem',
  height: '28.125rem',
  alignItems: 'flex-start',
  gap: '$6',
  backgroundColor: '$neutral-0',
  border: '1px solid',
  borderColor: '$neutral-4',
  borderRadius: '$xl',
})

export const ImageContainer = styled('div', {
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  width: '20rem',
  height: '28.125rem',

  img: {
    width: '20rem',
    height: '28.125rem',
    objectFit: 'cover',
    borderTopLeftRadius: '1.5rem',
    borderBottomLeftRadius: '1.5rem',
  },
})

export const DescriptionContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '40rem',
  height: '25.75rem',
  padding: '$6 $0',
  gap: '$6',
})

export const TitleDescriptionContainer = styled('div', {
  width: '38.5rem',
  height: '2rem',
  justifyContent: 'center',
  alignSelf: 'stretch',
  fontSize: '$2xl',
  fontWeight: '$semibold',
  lineHeight: '$short',
})

export const StrongContainer = styled('div', {
  fontSize: '$xl',
  fontWeight: '$semibold',
  lineHeight: '$short',
})

export const TextDescriptionContainer = styled('div', {
  width: '40rem',
  height: '19.3125rem',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$shorter',

  li: {
    marginLeft: 12,
  },
})
