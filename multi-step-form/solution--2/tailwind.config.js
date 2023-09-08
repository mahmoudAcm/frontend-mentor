/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        desktop: '1000px'
      },
      backgroundImage: {
        'sidebar-desktop': "url('/assets/images/bg-sidebar-desktop.svg')",
        'sidebar-mobile': "url('/assets/images/bg-sidebar-mobile.svg')"
      }
    }
  },
  plugins: []
};
