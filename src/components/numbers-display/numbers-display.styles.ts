import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  height: '22.75rem',
  width: '100vw',
  backgroundColor: '$neutral-0',
  color: '$neutral-4',
  fontFamily: '$default',
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '61.5rem',
  height: '17.75rem',
  alignItems: 'center',
  gap: '$6',
})

export const TextsContainer = styled('div', {
  width: '23.375rem',
  height: '5.125rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3',
})
export const TitleContainer = styled('h2', {
  fontSize: '$3xl',
  fontWeight: '$semibold',
  lineHeight: '$short',
})

export const SubtitleContainer = styled('h3', {
  fontSize: '$xl',
  fontWeight: '$regular',
  lineHeight: '$short',
})

export const CardsContainer = styled('div', {
  display: 'flex',
  height: '11.125rem',
  width: '61.5rem',
  alignItems: 'flex-start',
  gap: '$6',
})

export const CardContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  height: '11.125rem',
  width: '14.25rem',
  padding: '$5',
  gap: '$6',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  border: '1px solid $neutral-4',
  borderRadius: '$xl',
  lineHeight: '$short',
  backgroundColor: '$neutral-0',
})

export const StrongContainer = styled('strong', {
  fontSize: '$4xl',
  fontWeight: '$semibold',
})

export const InsideTextContainer = styled('h4', {
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$shorter',
})
