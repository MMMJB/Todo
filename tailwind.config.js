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
          activity: "#3F160A",
        },
        card: {
          base: "#152232",
          assignment: "#E26B43",
          scheduled: "#5598CF",
          activity: "#E6BB55",
          test: "#8943E2",
          project: "#55E66C",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        card: "0px 8px 10px -6px rgba(0, 0, 0, .1), 0px 20px 25px -5px rgba(0, 0, 0, .1), -1px -1px 2px 0px rgba(0, 0, 0, .1), 1px 1px 2px 0px rgba(255, 255, 255, .05)",
      },
      keyframes: {
        tick: {
          "0%, 49%": { opacity: "1" },
          "51%, 100%": { opacity: ".5" },
        },
      },
      animation: {
        tick: "tick 2s linear infinite",
      },
    },
    fontFamily: {
      mono: ["Space Mono", "monospace"],
      serif: ["Noto Sans", "sans-serif"],
    },
  },
  plugins: [],
};
