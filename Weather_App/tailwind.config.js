/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./main_code/**/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(35,123,203,1) 3%, rgba(207,152,33,1) 97%)',
      },
    },
  },
  plugins: [],
}

