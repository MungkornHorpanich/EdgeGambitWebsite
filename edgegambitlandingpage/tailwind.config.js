/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FAF9F6",
      green: "#04BF8A",
      bg: "#0f1e2f",
    },

    extend: {
      screens: {
        mobile: "397px",
      },
    },
  },
  plugins: [],
};
