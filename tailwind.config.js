module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        deep: "#6E3BC7",
        light: "#E692D0",
        contentButton: "#B361CD",
        contentParagraph: "#6F6F6F",
        cardHeading: "#8848C9",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        raleway: ['"Raleway"', "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "header-large-bg":
          "linear-gradient(to left, rgba(110, 59, 199, 1), rgba(230, 146, 208, 1)), url('/src/images/Shape_01@2x.png')",
        "header-small-bg":
          "linear-gradient(to left, rgba(110, 59, 199, 1), rgba(230, 146, 208, 1)), url('/src/images/Shape_01.png')",
        "footer-large-bg": "url('/src/images/Shape_04@2x.png')",
        "footer-small-bg": "url('/src/images/Shape_04.png')",
      }),
      boxShadow: {
        fullPage: "0 0 0 100vh rgba(0,0,0,0.5)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
