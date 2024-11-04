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
        // 'sert-desc': "url('@/assets/images/sections/5/bg-desc.png')"
      },
      fontFamily: {
        // mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        regular: {
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
