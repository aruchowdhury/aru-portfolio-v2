module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#e6f1ff",
      black: "#000000",
      gray: {
        100: "#ABC2E4",
        200: "#96B2DD",
        300: "#81A3D7",
      },
      teal: {
        500: "#14B8A6",
        800: "#134E4A",
      },
      blue: {
        500: "#3B82F6",
        800: "#1E40AF",
      },
      navyblue: {
        300: "#0C1B31",
        500: "#222f43",
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      transitionProperty: {
        left: "left",
      },
    },

    extend: {},
  },
  plugins: [],
};
