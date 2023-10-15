import { styled } from '@/lib/stitches'

export const ProjectsOverviewContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  margin:'0 auto',
  width: '90rem',
  padding:'0px',
})

export const ProjectsOverviewSection = styled('section', {
  display: 'flex',
  padding: '5rem 0',
  gap: '$8',
  height:'50.7rem',
  width:'90rem',
  flexDirection:'column',
  //alignItems: 'flex-start',
  flexWrap:'wrap',
  '@sm': {
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignItems: 'center',
    height:'auto',
    padding:'0.72rem',
    gap: '0',
  },
})

export const SectionTitle = styled('title', {
  fontFamily: '$default',
  fontSize: '$5xl',
  lineHeight: '$shortest',
  width:'29rem',
  fontStyle: 'normal',
  display:'block',
  fontWeight: '$bold',
  color:'$neutral-4',
  marginBottom:'$8',
  marginTop:'$10',
  '@sm': {
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
  width:'29rem',
  flexDirection: 'column',
  gap:'$4',

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

