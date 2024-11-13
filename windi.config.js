module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  shortcuts: {},
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/public/bg-header-section.png')"
      },
      fontFamily: {
        'circular': ['Circular Std', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        regular: {
          1: '#DF6951'
        }
      },
    },
    container: {
      center: true,
      padding: {
        'DEFAULT': '15px',
        'lg': '20px',
      }
    },
    borderRadius: {
    },
    boxShadow: {
      // 0: '0px 1px 2px 0px rgba(0, 0, 0, 0.20), 0px 0.1px 0.3px 0px rgba(0, 0, 0, 0.10)',
    },
    spacing: {
    },
    backgroundImage: {
    }
  },
  plugins: [
    require('windicss/plugin/line-clamp'),
  ]
}
