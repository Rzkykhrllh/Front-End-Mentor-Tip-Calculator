const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: ['active'],
      colors: {
        green: {
          ...colors.green,
          "500": "#26C2AD",
          '700': '#00474B'
        },
        gray: {
          ...colors.gray,
          "100": "#F3F8FB",
          "200": "#A3B7B6",
          "300": "#626E6E"
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}