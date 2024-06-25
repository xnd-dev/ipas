import { styled } from '@/lib/stitches'

export const SectionContainer = styled('section', {
    display: 'flex',
    width: 'auto',
    height: '47rem',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '$default',
})

export const ContactBoxContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '61.5rem',
    height: '37rem',
    gap: '$8',
    alignItems: 'center',
    justifyContent: 'center',
})


export const ContentBoxContainer = styled('div', {
    display: 'flex',
    width: '61.5rem',
    height: '29.875rem',
    gap: '$8',
})

export const InfoContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '29.75rem',
    height: '29.875rem',
    gap: '$6',
})

export const TitleContainer = styled('div', {
    display: 'flex',
    height: '$8',
    width: 'auto',

    h3: {
        fontSize: '$2xl',
        fontWeight: '$semibold',
        lineHeight: '$base',
    },

})

export const MapContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '29.75rem',
    height: '15rem',
    border: '1px solid black',
    borderRadius: '$xl',
})

export const AdressContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    height: 'auto',
    gap: '$3',

    h4: {
        fontSize: '$md',
        fontWeight: '$semibold',
        lineHeight: '$short',
    },

    h5: {
        fontSize: '$md',
        fontWeight: '$regular',
        lineHeight: '$short',
    },
})

export const CommunicationContainer = styled('div', {
    display: 'flex',
    width: 'auto',
    height: '3.5rem',
    gap: '$24',
})

export const ChannelsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',

    h4: {
        fontSize: '$md',
        fontWeight: '$semibold',
        lineHeight: '$short',
    },

    h5: {
        fontSize: '$md',
        fontWeight: '$regular',
        lineHeight: '$shorter',
    },
})

export const FormBoxContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '29.75rem',
    height: '29rem',
    gap: '$6',
})

export const FormContainer = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    width: '29.75rem',
    height: '25.5rem',
    gap: '$6',
    alignItems: 'center',

    input: {
        paddingLeft: '$7',
        width: '29.75rem',
        height: '2.5rem',
        borderRadius: '$xl',
        border: '1px solid black',
    },

    textarea: {
        paddingLeft: '$7',
        paddingTop: '$2',
        width: '29.75rem',
        height: '9.5rem',
        borderRadius: '$xl',
        border: '1px solid black',
    },
})

export const ButtonContainer = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10rem',
    height: '2.5rem',
    gap: '$2',
    borderRadius: '$xl',
    backgroundColor: '$primary',
    color: '$white',
    fontFamily: '$default',
    fontSize: '$md',
    fontWeight: '$semibold',
    lineHeight: '$shorter',
    boxShadow: '4px 4px 4px 0px rgba(64,64,64,0.10)',
})

export const SocialMidiaContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$3',
    width: 'auto',
    height: '5.125rem',
})

export const LogoContainer = styled('div', {
    display: 'flex',
    width: 'auto',
    height: '2.5rem',
    gap: '$3',

    a: {
        color: '$neutral-4',
    }
})

export const MapElement = styled('iframe', {
    width: "600",
    height: "450",
    style: "border:0",
    loading: "lazy",
    referrerpolicy: "no-referrer-when-downgrade",
    src: "https://www.google.com/maps/embed/v1/place?key=EjxSLiBQcmVmLiBKb3PDqSBMb3BlcyBEdWFydGUgLSBBdGFsYWlhLCBBTCwgNTc2OTAtMDAwLCBCcmF6aWwiLiosChQKEgnzDtfQA8oGBxFSLlW5GuNQ9RIUChIJRZkqc3fJBgcRhDFZKCr3u28",
})