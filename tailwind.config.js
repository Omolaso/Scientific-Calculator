/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      md: '786px'
    },
    extend: {
      fontFamily:{
        sans:['Poppins', 'sans-serif']
      },
      colors:{
        lightBlack: '#454545',
        black: '#000',
        grey: '#ccc',
        brown: '#A52A2A',
        darkRed: '#8B0000',
        maroon: '#800000'
      }
    },
  },
  plugins: [],
}
