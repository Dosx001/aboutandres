/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        Gray: "#484848",
        DarkGray: "#181a1b",
        LightBlue: "#00b6f0",
      },
      boxShadow: {
        box: "10px 10px 15px black",
      },
    },
  },
  plugins: [],
};
