/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
          '99999999': '99999999',
      },
      fontFamily: {
        'national2-medium': ['National2Medium'],
        'national2-regular': ['National2Regular'],
        'national2-bold': ['National2Bold'],
      },
    },
  },
  plugins: [
     require('tailwind-scrollbar-hide'),
  ],
}
