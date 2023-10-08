import { styled } from '@/lib/stitches'

export const GalleryColumnsContainer = styled('section', {
  display: 'flex',
  width:'39.75rem',
  height:'40.68rem',
  gap:'$4'
})
export const Column = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    gap:'$4',
    width:'8rem',
    height:'40.6875rem',
    justifyContent: 'center',
    '> img': {width: '8rem'},

    '&.column1': {
      alignItems:'flex-end',  
      width:'10.75rem',
      '> img': {width: '10.75rem'},
      '> img:first-child': {width: '8rem'},
    },
    '&.column2': {
        width:'8rem',
    },
    '&.column3': {
        width:'8rem',
    },
    '&.column4': {
        width:'10rem',
        '> img:first-child': {width: '10rem'},
    },
  });