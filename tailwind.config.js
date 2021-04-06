module.exports = {
  theme: {
    fontFamily: {
      body: ["Open Sans", "sans-serif"],
      newspaper: ["Roboto Slab", "serif"],
      title: ["Rubik", "sans-serif"],
      mono: ["mono"],
    },
    extend: {
      spacing: {
        96: "24rem",
        128: "32rem",
        "1/5": "20%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "1/3": "33%",
        "2/3": "67%",
      },
      colors: {
        smoke: {
          darkest: "rgba(0, 0, 0, 0.9)",
          darker: "rgba(0, 0, 0, 0.75)",
          dark: "rgba(0, 0, 0, 0.6)",
          default: "rgba(0, 0, 0, 0.5)",
          light: "rgba(0, 0, 0, 0.4)",
          lighter: "rgba(0, 0, 0, 0.25)",
          lightest: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
  purge: {
    content: ["./{components,content,pages}/**/*.{js,mdx,ts,tsx,jsx}"],
  },
  plugins: [require("@tailwindcss/typography")],
};
