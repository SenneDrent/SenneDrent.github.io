/** @type {import('tailwindcss').Config} */
const { zIndex: defaultzIndex } = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      redBlack: '#3d0a1f',
      greenBlack: '#041d14',
      white: '#fffefb',
      red: '#951540',
      green: '#15956a'
    },
    extend: {
      zIndex: {
        n: "-1",
      },
    },
  },
  plugins: [],
}
