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
      },
      animation: {
        pingOnce: "pingOnce 0.5s cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
