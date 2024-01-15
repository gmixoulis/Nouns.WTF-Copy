/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "rgba(255, 255, 255, 0.51)",
        gainsboro: {
          "100": "#e2e2e2",
          "200": "#e0e0e0",
        },
        firebrick: {
          "100": "#bd131c",
          "200": "#bd081c",
        },
        dimgray: {
          "100": "#53565a",
          "200": "rgba(112, 112, 112, 0)",
        },
        black: "#000",
        whitesmoke: "#f5f5f5",
        sandybrown: "#f9ac63",
        slategray: "#495d74",
      },
      fontFamily: {
        montserrat: "Montserrat",
        quinquefive: "QuinqueFive",
      },
    },
    fontSize: {
      xl: "20px",
      "16xl": "35px",
      "46xl": "65px",
      "11xl": "30px",
      "6xl": "25px",
      "4xl": "23px",
      lg: "18px",
      "26xl": "45px",
      "29xl": "48px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
