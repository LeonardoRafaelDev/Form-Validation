/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "/*.{html,js,css", "./src/*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        red: "#FF4949",
        divider: "#1C2235",
        primary: "#C700FF",
      },
    },
  },
  plugins: [],
};
