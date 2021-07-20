module.exports = {
  purge: {
    enabled: false,
    content: ['/public/html/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: theme => ({
      'header-mobile': "url('/public/images/bgheadermobile.svg')",
      'header-desktop': "url('/public/images/bgheaderdesktop.svg')"
    }),
    extend: {
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
