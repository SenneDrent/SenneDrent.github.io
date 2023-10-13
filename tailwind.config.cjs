/** @type {import('tailwindcss').Config} */
const { zIndex: defaultzIndex } = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      redBlack: '#3d0a1f',
      red: '#D00000',
      yellow: '#FFBA08',
      blue: '#2B3A67',
      green: '#1EFFBC',
      lightRed: "#FCE9DA",
      lightGreen: "#041d14",
      coldWhite: '#F9F0F3',
      warmWhite: "#FFF2EB", 
      warmDark: "#281001"
    },
    extend: {
      zIndex: {
        n: "-1",
      },
    },
  },
  plugins: [],
}
