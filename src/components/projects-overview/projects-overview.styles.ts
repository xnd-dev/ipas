import { styled } from '@/lib/stitches'

export const ProjectsOverviewContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  width: '89%',
  padding:'0%',
  margin:'auto',
  maxWidth: '71rem',
  '@sm': {
    width:'100vw',
    left: 'auto',
    transform: 'none'
  }
})

export const ProjectsOverviewSection = styled('section', {
  display: 'flex',
  padding: '$20 0rem',
  flexDirection:'row',
  alignItems: 'stretch',
  flexWrap:'wrap',
  '&:last-child': {
    left:'0vw'
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


export const SectionText = styled('div', {
  width:'43%',
  alignItems:'stretch',
  '@sm': {    
    width:'100%',
  },  
})
export const SectionTitle = styled('title', {
  fontFamily: '$default',
  padding:'0% 2%',
  fontSize: '$5xl',
  width:'100%',
  lineHeight: '$shortest',
  fontStyle: 'normal',
  display:'flex',
  fontWeight: '$bold',
  color:'$neutral-4',
  marginBottom:'$8',
  marginTop:'$10',
  '@sm': {
    display:'block',
    color:'$blue-gray',
    width:'100%',
    letterSpacing:'-0.03rem',
    lineHeight:'130%',
    textAlign:'center',
    fontSize: '$2xl',
  },  
})
export const SectionInnerText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap:'$4',
  padding:'1%',
  '@sm' : {
    marginTop:'$8',
    width:'100%',
    padding:'0vw 6vw',
  }
}) 
export const SectionParagraph = styled('p', {
  fontFamily: '$default',
  display:'block',
  fontSize: '$lg',
  fontStyle: 'normal',
  fontWeight: '$regular',
  lineHeight: '$short',
  color:'$neutral-4',
  '@sm': {
    fontSize:'$md',
  },  
})

