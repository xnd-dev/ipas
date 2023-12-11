import { globalCss } from '@/lib/stitches'

export const globalStyles = globalCss({
  '*': {
    'box-sizing': 'border-box',
    'max-width': '100%',
    margin: 0,
    padding: 0,
    scrollMarginTop: '5.5rem',
    scrollSnapMarginTop: '5.5rem',
    scrollBehavior: 'smooth',
  },

  body: {
    backgroundColor: '$neutral-0',
    color: '$black',
    position:'relative',
    margin: 0,
    padding: 0,
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Poppins, sans-serif',
    border: 'none',
  },

  a: {
    color: 'inherit, sans-serif',
    'text-decoration': 'none',
  },
})
