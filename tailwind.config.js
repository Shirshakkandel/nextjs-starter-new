/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#333',
        secondary: '#3183ff',

        text: '#d8dfe9cc',
      },
      fontFamily: {
        monts: ['Montserrat', 'sans-serif'],
        neuro: ['Neuro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
