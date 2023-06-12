/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        epilogue: "'Epilogue', sans-serif"
      },
      colors: {
        default: 'hsl(0, 0%, 98%)',
        primary: 'hsl(0, 0%, 8%)',
        secondary: 'hsl(0, 0%, 41%)'
      }
    }
  },
  plugins: []
};
