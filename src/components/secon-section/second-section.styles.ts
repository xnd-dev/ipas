import { styled } from '@/lib/stitches'

const Card = styled('div', {
  display: 'flex',
  height: '$48',
  width: '$64',
  padding: '$5',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$3',
  flex: '1 0 0',
  alignSelf: 'stretch',
})

export const SectionContainer = styled('section', {
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  height: '$80',
  width: '100vw',
  backgroundColor: '$neutral-0',
  color: '$neutral-4',
  fontFamily: '$default',
})

export const TitleContainer = styled('div', {
  fontSize: '$3xl',
  fontWeight: '$semibold',
  lineHeight: '$short',
})

export const SubtitleContainer = styled('div', {
  fontSize: '$xl',
  fontWeight: '$regular',
  lineHeight: '$short',
})

export const BlueContainer = styled(Card, {
  backgroundColor: '$secondary',
})

export const YellowContainer = styled(Card, {
  backgroundColor: '$tertiary-variant',
})
