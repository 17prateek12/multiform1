/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xl: { max: "1280px" },
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
    },
    extend: {},
  },
  plugins: [],
}