import { mauve, violet, green, blackA, gray } from '@radix-ui/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        base: "'Plus Jakarta Sans', sans-serif"
      },
      colors: {
        'blue-custom': '#0A327B',
        'blue-custom-light': '#0E3C89',
        'blue-custom-dark': '#082858',
        ...mauve,
        ...violet,
        ...green,
        ...blackA,
        ...gray
      },
      ringColor: {
        'blue-custom-light': '#0E3C89'
      }
    }
  },
  plugins: []
};
