/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-1':'#023047',
        'color-2':'#ffbc42'
      },
      fontFamily:{
        'font-1':'Roboto',
        'font-2':"Inter"
      }
    },
  },
  plugins: [require('daisyui')],
}