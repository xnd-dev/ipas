import { styled } from '@/lib/stitches'
import { media } from '@/themes'

export const SectionContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  margin:'0 auto',
  width: '90rem',
  padding:'0px',
  
  '@sm': {
    marginTop:'2.5rem',
    background:'red',
  },
})

export const SectionSecao = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  padding: '5rem',
  alignItems: 'center',
  gap: '$8',
  '@sm': {
    flexDirection: 'column',
    padding:'0.72rem',
    gap: '0',
  },
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
  '@sm': {
    marginBottom:'$8',
    color:'$blue-gray',
    letterSpacing:'-0.03rem',
    lineHeight:'130%',
    textAlign:'center',
    fontSize: '$2xl',
  },  
})

export const SectionContent = styled('div', {
  fontFamily: '$default',
  display:'block',
  fontSize: '$xl',
  fontStyle: 'normal',
  fontWeight: '$regular',
  lineHeight: '$short',
  margin:'$4 0',
  color:'$neutral-4',
  '@sm': {
    margin:'$4 0.78rem',
    fontSize:'$md',
  },  
})
