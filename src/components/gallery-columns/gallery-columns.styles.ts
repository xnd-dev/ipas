import { styled } from '@/lib/stitches'

export const GalleryColumnsContainer = styled('section', {
  display: 'flex',
  height:'100%',
  width:'55%',
  position:'relative',
  martinTop:'0',
  left:'-5%',
  gap:'$4',
  alignItems:'stretch',
  '&:last-child': {
    left:'5%',
    right:'-5%'
  },
  '@sm': {
    height:'auto',
    marginBottom:'$4',
    left:'0%',
    width:'90vw',
    //width:'22.56rem',
    //minWidth:'22.56rem',
  },
})
export const Column = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    gap:'$4',
    width:'25%',
    justifyContent: 'center',
    '> img': {width: '100%', borderRadius:'0.5rem'},

    '&.column1': {
      alignItems:'flex-end',  
      width:'28%',
      '> img': {width: '100%'},
      '> img:first-child': {width: '74.41%'},
    },
    '&.column4': {
        width:'26%',
        '> img': {width: '80%'},
        '> img:first-child': {width: '100%'},
    },
  });