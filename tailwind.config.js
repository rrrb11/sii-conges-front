/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: {
        },
      },
      outline: {
        transparent: '1px solid transparent',
        primary: '1px solid rgba(0, 55, 90, 1)',
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within'],
      borderColor: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within'],
      fontWeight: ['responsive', 'hover', 'focus']
    },
  },
  plugins: [],
}