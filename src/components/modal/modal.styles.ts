import { styled } from '@/lib/stitches'

export const BackgroundContainer = styled('div', {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.8)',
    zIndex: '1000',

})
export const ModalContainer = styled('div', {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'block',
    padding: '4rem',
    backgroundColor: '$white',
    width: '100vw',
    height: '100vh',
    borderRadius: '$px',

      ul: {
        marginTop: '15vh',
      },

      li: {
       display: 'flex',
       position: 'relative',
      },
  
      a:{
        display: 'flex',
        padding: '$3',
        textDecotaion: 'none',
        textAlign: 'center',
        color:'$neutral-4',
        fontFamily:'$default',
        fontSize:'$xl',
        fontWeight:'$medium',
        lineHeight: '15vh',
        height: '10vh',
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        cursor: 'pointer',
      },

      button: {
        width:'$8',
        height: '$8',
        position: 'fixed',
        top: '2%',
        left: '88%',
        background: 'none',
        fontFamily: '$code',
        fontSize: '$xl',
        color: '$neutral-3',
        cursor: 'pointer',
      }
  })