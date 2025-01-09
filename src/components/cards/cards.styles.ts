import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  height: '36.4375rem',
  width: '100vw',
  backgroundColor: '$tertiary-variant',
  color: '$white',
  fontFamily: '$default',
  padding: '$20 $36',
  overflow: 'hidden',
  overflowX: 'auto',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  scrollbarWidth: 'none', 
  msOverflowStyle: 'none', 

  '@sm': {
    height:'auto',
    padding:'$20 $6',
  },
})

export const CardsContainer = styled('div', {
  display: 'flex',
  width: '55.875rem',
  height: '26.4375rem',
  alignItems: 'center',
  gap: '$6',
})

export const CardContainer = styled('span', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  width: '17.625rem',
  height: '26.4375rem',
  padding: '$5',
  gap: '$6',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  textAlign: 'center',
  borderRadius: '$xl',
  lineHeight: '$short',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  // '&:hover': {
  //   '&::before': {
  //     content: '""',
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     width: '100%',
  //     height: '100%',
  //     backgroundColor: 'rgba(0, 0, 0, 0.3)',
  //     borderRadius: '$xl',
  //   },
  // },
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
  maxWidth: '17.625rem',
  height: 'auto',
  maxHeight: '23.4375rem',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '$2',
})

export const TitleContainer = styled('h3', {
  display: 'flex',
  justifyContent: 'flex-start',
  textAlign: 'start',
  maxWidth: '14.625rem',
  height: '0.875rem',
  fontSize: '$xs',
  fontWeight: '$regular',
  lineHeight: '$shorter',
  opacity: '0.6',
  textTransform: 'uppercase',
})

export const SubtitleContainer = styled('div', {
  textAlign: 'start',
  width: 'auto',
  maxWidth: '14.625rem',
  height: 'auto',
  maxHeight: '23.4375rem',
  paddingRight: '$30',
})

export const StrongContainer = styled('strong', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fontSize: '$4xl',
  fontWeight: '$bold',
  lineHeight: '$short',
  letterSpacing: '-0.05rem',
})

export const DescriptionContainer = styled('h2', {
  display: 'flex',
  justifyContent: 'flex-start',
  fontSize: '$xl',
  fontWeight: '$medium',
  lineHeight: '$short',
})
