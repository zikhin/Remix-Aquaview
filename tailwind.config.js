export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
      backgroundImage: theme => ({
       'home-page': "url('./app/images/homepage-background.png')",
      }),
    extend: {
      fontFamily: {
        sans: [
          "Montserrat",
          "Noto Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
};
