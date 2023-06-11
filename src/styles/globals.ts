import { globalCss } from '@stitches/react'

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
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    border: 'none',
  },

  a: {
    color: 'inherit, sans-serif',
    'text-decoration': 'none',
  },

  '@media (prefers-color-scheme: dark)': {
    html: {
      'color-scheme': 'dark',
    },

    body: {
      background: '$black',
      color: '$white',
    },
  },
})
