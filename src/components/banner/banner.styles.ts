import { styled } from '@/lib/stitches'

export const BannerContainer = styled('section', {
  display: 'flex',
  width: '90rem',
  justifyContent:'center',
  margin:'0 auto',
  paddingTop:'7.3rem',
  height: '47.55rem',
  marginBottom:'0',
  backgroundColor:'$neutral-0',
  backgroundImage: 'url("/hands.png")',
  backgroundSize: 'auto 33.89rem',
  backgroundPosition: 'right 7.3rem',
  backgroundRepeat: 'no-repeat',

  '@sm': {
    backgroundImage: 'url("/hands.png")',
    backgroundSize: '92vw auto',
    backgroundPosition: '34vw -17.5vw',
    paddingTop:'73.06vw',
    height:'198.8vw',
    width:'100vw'
  },
})

export const BannerContent = styled('div', {
    position:'relative',
    display: 'block',
    width: '61.5rem',
    height: '50.75rem',
    margin:'0 auto',

    '@sm': {
      //gap:'$6',
      gap:'6.7vw',
      //padding:'$6',
      padding: '6.7vw',
      width:'100vw',
      height:'auto',
      textAlign:'center',
    },      
  })

export const TitleContainer = styled('h2', {
    width:'37.5rem',
    height:'13.125rem',
    marginTop:'7.31rem',
    weight:'37.5rem',
    fontFamily: '$default',
    color: '$neutral-4',
    fontSize: '$6xl',
    fontWeight: '$bold',
    lineHeight: '$shortest',
    letterSpacing: '0',
    textAlign: 'left',

    '@sm': {
      //fontSize:'$3xl',
      fontSize:'8.74vw',
      width:'100vw',
      marginTop:'0',
      textAlign:'center',
      lineHeight:'130%',
      height:'auto',
    },    
})

export const ParagraphContainer= styled('div', {
    display:'block',
    width:'37.5rem',
    fontFamily: '$default',
    color: '$neutral-4',
    weight:'25rem',
    fontSize:'$xl',
    lineHeight:'$base',
    marginTop:'$6',

    '@sm': {
      textAlign:'left',
      width:'100vw',
      marginTop:'7.6vw',
      //marginTop:'$6',
      lineHeight:'$short',
      fontSize: '5.5vw',
    },        
})

export const ButtonsContainer = styled('div',{
    display:'flex',
    marginTop:'$6',
    gap:'$6',

    '@sm': {
      flexDirection:'column',
      //gap:'$6',
      //marginTop:'$6',
      gap:'6.8vw',
      marginTop:'6vw',
    },
})

export const ButtonContainerWhite = styled('button',{
    padding:'$4 $8',
    color:'$neutral-4',
    fontFamily: '$default',
    fontWeight:'$semibold',
    fontSize:'$md',
    border:'1px solid $neutral-4',
    borderRadius:'$full',
    lineHeight:'$shorter',

    '@sm': {
      padding:'4vw',
      fontSize:'4.4vw', //1rem
    },        
})

export const ButtonContainer = styled('button', {
    display: 'flex',
    padding: '$4 $8',
    gap: '$2',
    border: 'none',
    borderRadius: '$full',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$neutral-0',
    backgroundColor: '$primary',
    cursor: 'pointer',

    '@sm': {
      //widht:'19.5rem',
      width:'86.7vw',
      //height:'3.25rem'
      height:'14.4vw',
    },    

    '&:hover': {
      backgroundColor: '$primary-variant-2',
    },
  
    '&:active': {
      backgroundColor: '$primary-variant-1',
    },
  })
  export const InsideTextContainer = styled('span', {
    width: '5,3125rem',
    height: '1,1875rem',
    color: '$neutral-0',
    fontFamily: '$default',
    fontSize: '$md',
    fontWeight: '$semibold',
    lineHeight: '$shorter',
    whiteSpace: 'nowrap',


    '@sm': {
      display:'flex',
      //gap:'$2',
      gap:'2.2vw',
      width:'auto',
      height:'auto',
      fontSize:'4.4vw', //1rem
      alignContent:'center',
      justifyContent: 'center',
    },        

  })
  