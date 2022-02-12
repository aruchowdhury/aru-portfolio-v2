module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "000000",
      teal: {
        500: "#14B8A6",
        800: "#134E4A",
      },
      blue: {
        500: "#3B82F6",
        800: "#1E40AF",
      },
      megenta: "#0a192f",
      lightmegenta: "#222f43",
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
