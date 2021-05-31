/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: '#f56a75',
        secondary: '#0e3757',
      }),
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      textColor: {
        primary: '#f56a75',
        secondary: '#0e3757',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
