import { styled } from '@/lib/stitches'

const Card = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  height: '11.125rem',
  width: '14.25rem',
  padding: '$5',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  flex: '1 0 0',
  border: '1px solid #333333',
  borderRadius: '$xl',
  lineHeight: '$short',
  gap: '$5',
})

export const SectionContainer = styled('section', {
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30rem',
  width: '100vw',
  backgroundColor: '$neutral-0',
  color: '$neutral-4',
  fontFamily: '$default',
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '61.5rem',
  height: '19.75rem',
  alignItems: 'center',
  gap: '2rem',
})

export const TextsContainer = styled('div', {
  width: '24,625rem',
  height: '6,625rem',
  display: 'flex',
  padding: '0.625rem',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',
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
  gap: '1.5rem',
})

export const BlueContainer = styled(Card, {
  backgroundColor: '$secondary',
})

export const VariantContainer = styled(Card, {
  backgroundColor: '$secondary-variant',
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
