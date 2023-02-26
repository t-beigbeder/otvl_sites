const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    // enabled: true,
    content: [
      './public/**/*.html',
      './src/**/*.vue',
  ]},
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      wrt: {
        DEFAULT: '#505050'
      },
      menuGray: {
        DEFAULT: '#E1E1D2'
      },
      galleryGray: {
        DEFAULT: '#212121'
      }
    },
    fontFamily: {
      'sans': ['Avenir', 'Nunito', 'sans-serif'],
    },
    boxShadow: {
      md: '0 1px 5px rgba(0,0,0,0.2),0 2px 2px rgba(0,0,0,0.24),0 3px 1px -2px rgba(0,0,0,0.36)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
       move: 'move',
      'not-allowed': 'not-allowed',
      crosshair: 'crosshair',
      'zoom-in': 'zoom-in',
      'e-resize': 'e-resize',
      'w-resize': 'w-resize',
    }

  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};