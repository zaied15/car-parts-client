module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff3737",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#f33544",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
