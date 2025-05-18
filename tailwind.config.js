/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        soluto: {
          primary: '#223f66',
          secondary: '#4a6fa5',
          accent: '#e0e7f1',
          light: '#f5f8fc',
          dark: '#162a45',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
