/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pingOnce: {
          "50%": { transform: "scale(2)" },
          100: { transform: "scale(1)" },
        },
        homePage: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        homePage: "homePage 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        pingOnce: "pingOnce 0.5s cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
