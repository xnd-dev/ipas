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
    backgroundSize: 'auto 20rem',
    backgroundPosition: '7.4rem -4.3rem',
    paddingTop:'7.8rem',
    height:'45.6875rem',
  },
})

export const BannerContent = styled('div', {
    position:'relative',
    display: 'block',
    width: '61.5rem',
    marginRight:'14.25rem',
    height: '50.75rem',
    margin:'0 auto',

    '@sm': {
      gap:'$6',
      padding:'$6',
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
      fontSize:'$3xl',
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
      lineHeight:'$short',
    },        
})

export const ButtonsContainer = styled('div',{
    display:'flex',
    marginTop:'$6',
    gap:'$6',

    '@sm': {
      flexDirection:'column',
      gap:'$6',
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
      widht:'19.5rem',
      height:'3.25rem'
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
      gap:'$2',
      alignContent:'center',
      justifyContent: 'center',
    },        

  })
  