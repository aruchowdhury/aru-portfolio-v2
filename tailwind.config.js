module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lightgreen: "#64FFDA",
      violet: "#CCD6F6",
      darkviolet: "#889230",
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
