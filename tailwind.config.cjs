/** @type {import('tailwindcss').Config} */
const { zIndex: defaultzIndex } = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      darkShade: '#3d0a1f',
      lightGreen: '#7DCD85',
      wineRed: '#982649',
      blue: '#7C99B4',
      orange: "#DD6031",
      warmWhite: "#FFF2EB", 
      warmDark: "#62182F"
    },
    extend: {
      zIndex: {
        n: "-1",
      },
    },
  },
  plugins: [],
}
