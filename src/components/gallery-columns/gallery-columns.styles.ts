import { styled } from '@/lib/stitches'

export const GalleryColumnsContainer = styled('section', {
  display: 'flex',
  width:'39.75rem',
  minWidth:'39.75rem',
  height:'40.68rem',
  gap:'$4',
  alignItems:'stretch',
  '@sm': {
    height:'auto',
    marginBottom:'$4'
  },
})
export const Column = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    gap:'$4',
    width:'8rem',
    justifyContent: 'center',
    '> img': {width: '100%'},

    '&.column1': {
      alignItems:'flex-end',  
      width:'10.75rem',
      '> img': {width: '100%'},
      '> img:first-child': {width: '74.41%'},
    },
    '&.column4': {
        width:'10rem',
        '> img': {width: '80%'},
        '> img:first-child': {width: '100%'},
    },
  });