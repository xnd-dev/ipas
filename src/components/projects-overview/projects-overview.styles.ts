import { styled } from '@/lib/stitches'
import { media } from '@/themes'

export const SectionContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  margin:'0 auto',
  width: '90rem',
  padding:'0px',
  '@media (max-width: 768px)': {
    marginTop:'11vw',
  },
})

export const SectionSecao = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  padding: '5rem',
  alignItems: 'center',
  gap: '$8',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    padding:'3vw',
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
  '@media (max-width: 768px)': {
    marginBottom:'9vw',
    color:'$blue-gray',
    letterSpacing:'-0.03rem',
    lineHeight:'130%',
    textAlign:'center',
    fontSize: '7vw',
  },  
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
  '@media (max-width: 768px)': {
    margin:'2vw 4vw',
    fontSize:'4vw',
  },  
})
