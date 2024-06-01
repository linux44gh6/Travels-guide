/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-1':'#ee6c4d',
        'color-2':'#003554'
      }
    },
  },
  plugins: [require('daisyui')],
}