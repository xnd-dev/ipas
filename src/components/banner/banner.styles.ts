import { styled } from '@/lib/stitches'

export const BannerContainer = styled('section', {
  display: 'flex',
  position:'relative',
  width: '90rem',
  justifyContent:'center',
  margin:'0 auto',
  paddingTop:'7.3rem',
  height: '41.61rem',
  marginBottom:'5.94rem',
  backgroundColor:'$neutral-0',
  backgroundImage: 'url("/hands.png")',
  backgroundSize: 'auto 33.89rem',
  backgroundPosition: 'right 7.3rem',
  backgroundRepeat: 'no-repeat',
})

export const BannerContent = styled('div', {
    position:'relative',
    display: 'block',
    width: '61.5rem',
    marginRight:'14.25rem',
    height: '50.75rem',
    margin:'0 auto',
  })

export const TitleContainer = styled('h2', {
    width:'37.5rem',
    height:'13.125rem',
    marginTop:'7.31rem',
    weight:'37.5rem',
    fontFamily: '$default',
    color: '$neutral-4',
    fontSize: '4rem',
    fontWeight: '700',
    lineHeight: '4.375rem',
    letterSpacing: '0',
    textAlign: 'left',
})

export const ParagraphContainer= styled('div', {
    display:'block',
    width:'37.5rem',
    fontFamily: '$default',
    color: '$neutral-4',
    weight:'25rem',
    fontSize:'1.25rem',
    lineHeight:'2rem',
    marginTop:'1.5rem',
})

export const ButtonsContainer = styled('div',{
    display:'flex',
    marginTop:'1.5rem',
    gap:'1.5rem',
})

export const ButtonContainerWhite = styled('button',{
    padding:'1rem 2rem',
    color:'$neutral-4',
    fontFamily: '$default',
    fontWeight:'$semibold',
    fontSize:'1rem',
    border:'1px solid $neutral-4',
    borderRadius:'$full',
    lineHeight:'1.2rem'
})

export const ButtonContainer = styled('button', {
    display: 'flex',
    padding: '1rem 2rem',
    gap: '$2',
    border: 'none',
    borderRadius: '$full',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$neutral-0',
    backgroundColor: '$primary',
    cursor: 'pointer',
  
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
  })
  