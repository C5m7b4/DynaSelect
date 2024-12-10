/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
            display: "hidden",
          },
          "100%": {
            opacity: "1",
            display: "block",
          },
        },
        dissapear: {
          "0%": {
            opacity: "1",
            display: "block",
          },
          "100%": {
            opacity: "0",
            display: "hidden",
          },
        },
      },
      animation: {
        appear: "appear .3s ease-in-out forwards",
        dissapear: "dissapear .3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
