/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: [],
  theme: {
    extend: {
      spacing: {
        '104' : '26rem',
      }
    },
    plugins: [],
  },
  daisyui: {
    themes: ["autumn"],
  },
};
