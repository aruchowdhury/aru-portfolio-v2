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
        100: "#ccd6f6",
        200: "#a8b2d1",
        300: "#8892b0",
      },
      teal: {
        500: "#14B8A6",
        800: "#134E4A",
      },
      blue: {
        500: "#3B82F6",
        800: "#1E40AF",
      },
      megenta: "#0C1B31",
      lightmegenta: "#222f43",
      // navy
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
