import { globalCss } from '@/lib/stitches'

export const globalStyles = globalCss({
  '*': {
    'box-sizing': 'border-box',
    'max-width': '100%',
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$white',
    color: '$black',
    margin: 0,
    padding: 0,
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    border: 'none',
  },

  a: {
    color: 'inherit, sans-serif',
    'text-decoration': 'none',
  },
})
