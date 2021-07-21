module.exports = {
  mode: 'jit',
  purge: [
    './public/html/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: theme => ({
      'header-mobile': "url('/public/images/bgheadermobile.svg')",
      'header-desktop': "url('/public/images/bgheaderdesktop.svg')"
    }),
    extend: {
      borderWidth: {
        '6': '6px'
      },
      fontFamily: {
        'main': ['Spartan', 'sans-serif']
      },
      colors: {
        cyan: {
          desaturated: '#5ba4a4',
          light: '#eef6f6',
          lighter: '#effafa',
          dark: '#7b8e8e',
          darker: '#2c3a3a'
        },
      },
      scale: {
        '60': '.6'
      },
      width: {
        '12/14': '85.7142857%'
      },
      boxShadow: {
        '2x1-Cyan': '0 25px 50px -12px rgba(91, 164, 164, 0.25)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
