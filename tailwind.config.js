module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-hover"],
      brightness: ["group-hover"],
      blur: ["group-hover"],
      grayscale: ["group-hover"],
    },
  },
  plugins: [],
};
