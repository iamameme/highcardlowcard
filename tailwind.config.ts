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
      },

      

      keyframes: {
        wiggle: {
          '0%, 100%': {
              transform: 'rotate(-1deg)'
          },
          '50%': {
              transform: 'rotate(1deg)'
          },

          cardflip : {
            '50%' : 'rotateY(180deg)'
          },

        },

      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        cardflip: 'cardflip 1s ease-in-out infinite'
      },
      
    },
  },

  plugins: [],
  

};

export default config;
