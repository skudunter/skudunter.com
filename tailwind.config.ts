import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        aboutBackground: "url('/app/images/background.png')",
      },
      colors: {
        primary: "#32373B",
        secondary: "#04F06A",
        tersiary: "#ABEBD2",
        quad: "#DA4167",
        quint: "#D3C1C3",
      },
      fontFamily: {
        Roboto: ["'Roboto'", "serif"],
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0", filter: "blur(5px)" },
          "100%": { opacity: "1", effect: "blur(0px)" },
        },
        scrollIn: {
          "0%": {
            opacity: "0",
            transform: "translate(-60%)",
            filter: "blur(3px)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0)",
            effect: "blur(0px)",
          },
        },
        vibrate: {
          "0%": {
            transform: "translate3d(-2px, 0, 0)",
          },
          "20%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "40%": {
            transform: "translate3d(-2px, 0, 0)",
          },
          "60%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "80%": {
            transform: "translate3d(-2px, 0, 0)",
          },
          "100%": {
            transform: "translate3d(2px, 0, 0)",
          },
        },
      },
      animation: {
        fadein: "fadein 1s ease forwards",
        fadeout: "fadein 1s ease forwards reverse",
        scrollIn: "scrollIn 0.5s",
        vibrate: "vibrate 1.5s",
      },
      spacing: {
        "17%": "17%",
        "40%": "37%",
        arrows: "7%",
        "404Div": "80vh",
        setHeight: "40vh",
      },
      screens: {
        xs: "390px",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};
export default config;
