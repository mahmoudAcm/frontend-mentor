/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mobile: {
          max: "1024px",
        },
        "mobile-sm": {
          max: "375px",
        },
      },
    },
  },
  plugins: [],
  important: true,
};
