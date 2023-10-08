import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  margin:'0 auto',
  width: '90rem',
  padding:'0px',
})

export const SectionSecao = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  padding: '5rem',
  alignItems: 'center',
  gap: '$8',
})

export const SectionText = styled('div', {
  display: 'flex',
  width:'38.0625rem',
  flexDirection: 'row',
}) 

export const SectionTitle = styled('title', {
  fontFamily: '$default',
  fontSize: '$5xl',
  lineHeight: '$shortest',
  width:'100%',
  fontStyle: 'normal',
  display:'block',
  fontWeight: '$bold',
  color:'$neutral-4',
  marginBottom:'$8',
})

export const SectionContent = styled('div', {
  fontFamily: '$default',
  display:'block',
  fontSize: '$xl',
  fontStyle: 'normal',
  fontWeight: '$regular',
  lineHeight: '$short',
  margin:'$4 0rem',
  color:'$neutral-4',
})
