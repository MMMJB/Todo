/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./*.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "#0B1622",
        sidebar: {
          icon: "#405F7E",
          text: "#82A1C0",
          background: "#152232",
        },
        text: {
          light: "#A6CCF0",
          mid: "#6C9CCA",
          dark: "#6195C6",
          project: "#014500",
          timed: "#3F160A",
        },
        card: {
          base: "#152232",
          assignment: "#E26B43",
          activity: "#5598CF",
          timed: "#E6BB55",
          test: "#8943E2",
          project: "#55E66C",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
    },
    fontFamily: {
      mono: ["Space Mono", "monospace"],
      serif: ["Noto Sans", "sans-serif"],
    },
  },
  plugins: [],
};
