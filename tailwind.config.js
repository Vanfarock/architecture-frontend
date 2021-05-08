module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        top: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      },
    },
    scale: {
      103: "1.03",
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      brightness: ["group-hover"],
      blur: ["group-hover"],
      grayscale: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
