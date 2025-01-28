/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        danger: {
          1: "#eb7e7e",
        },
        black: {
          1: "#000000",
        },
        purple: {
          1: "#252a4d",
          2: "#cbc2dd82",
          3: "#290088",
          4: "#9a87c7",
          5: "#dccefd",
        },
        gray: {
          1: "#F6F6F6",
          2: "#0000000D",
          3: "#00000014",
          4: "#0000001F",
          5: "#f0f0f059",
          6: "#eaeaea",
        },
      },
      backgroundImage: {
        customRadial:
          "radial-gradient(circle, rgba(60,25,210,1) 0%, rgba(90,117,255,1) 50%, rgba(59,0,195,1) 100%)",
      },
      screens: {
        xxxs: "280px",
        xxs: "320px",
        xs: "375px",
        sm: "400px",
        md: "440px",
        mdx: "520px",
        lg: "768px",
        xl: "1024px",
        xxl: "1280px",
        "h-xs": { raw: "(min-height: 400px)" },
        "h-sm": { raw: "(max-height: 600px)" },
        "h-md": { raw: "(max-height: 800px)" },
        "h-lg": { raw: "(min-height: 1000px)" },
      },
      fontFamily: {
        Monsterrat: ["Monsterrat", "sans-serif"],
        MonsterratBold: ["Monsterrat-bold", "sans-serif"],
        MonsterratExtraBold: ["Monsterrat-extrabold", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "rgb(116, 116, 116) 0px 11px 22px -3px",
      },
      animation: {
        upDown: "moveUpDown 2s infinite ease-in-out",
      },
      keyframes: {
        moveUpDown: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".animate": {
          transition: "all 200ms",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      });
    },
  ],
}; 