/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        quick:['Quicksand', 'sans']
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
