import { styled } from '@/lib/stitches'

export const ProjectsOverviewContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  margin:'0 auto',
  width: '90rem',
  minWidth: '90rem',
  padding:'0px',
})

export const ProjectsOverviewSection = styled('section', {
  display: 'flex',
  padding: '$20 14.19rem $20 $20',
  height:'50.7rem',
  gap:'$8',
  flexDirection:'column',
  alignItems: 'flex-start',
  flexWrap:'wrap',
  '&:last-child': {
    alignItems:'flex-end',
    padding: '5rem 5rem 5rem 14.19rem',
  },
  '@sm': {
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignItems: 'center',
    height:'auto',
    padding:'0.72rem',
    gap: '0',
    '&:last-child': {
      alignItems:'center',
      padding: '0.72rem',
    },
  },
})

export const SectionTitle = styled('title', {
  fontFamily: '$default',
  fontSize: '$5xl',
  width:'29.06rem',
  lineHeight: '$shortest',
  fontStyle: 'normal',
  display:'flex',
  fontWeight: '$bold',
  color:'$neutral-4',
  marginBottom:'$8',
  marginTop:'$10',
  '@sm': {
    display:'block',
    marginBottom:'0',
    marginTop:'0',
    color:'$blue-gray',
    width:'100%',
    letterSpacing:'-0.03rem',
    lineHeight:'130%',
    textAlign:'center',
    fontSize: '$2xl',
  },  
})



export const SectionText = styled('div', {
  display: 'flex',
  width:'29.06rem',
  flexDirection: 'column',
  gap:'$4',
  marginBottom:'4.47rem',

  '@sm' : {
    marginTop:'$8',
    width:'38.0625rem',
  }
}) 


export const SectionParagraph = styled('p', {
  fontFamily: '$default',
  display:'block',
  fontSize: '$xl',
  fontStyle: 'normal',
  fontWeight: '$regular',
  lineHeight: '$short',
  color:'$neutral-4',
  '@sm': {
    fontSize:'$md',
  },  
})

