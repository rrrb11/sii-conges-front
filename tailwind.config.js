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
        'primary': {
          '50': '#f0f8ff',
          '100': '#dfefff',
          '200': '#b9e0fe',
          '300': '#7bc9fe',
          '400': '#34adfc',
          '500': '#0a93ed',
          '600': '#0073cb',
          '700': '#005aa1',
          '800': '#054f87',
          '900': '#0a4170',
          '950': '#07294a',
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