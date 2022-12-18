/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        brand: {
          light: "#AA8AF4",
          DEFAULT: "#662DEC",
          dark: "#3C0FA3",
        },
        selection: {
          DEFAULT: "#E8E8E9",
        },
        foreground: {
          DEFAULT: "#383C43",
        },
      },
    },
  },
  plugins: [],
};
