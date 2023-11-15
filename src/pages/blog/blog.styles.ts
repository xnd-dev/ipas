import { styled } from '@/lib/stitches'

export const SectionContainer = styled('footer', {
    width: '90rem',
    height: 'auto',
    backgroundColor: '$neutral-0',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '5rem 0',
    margin: '0 auto'
})

export const PostPreviewsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    height: 'auto',
    alignItems: 'left',
    justifyContent: 'center',
    gap: '2rem',
})