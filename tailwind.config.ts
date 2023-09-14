import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "homepageOne": "url('https://image.tmdb.org/t/p/w1280/f1hes6yVaZ7SACcjBvovkcCCnTf.jpg')",
        "threemoviesstack": "url('/threemoviesstack.png')",
        "circlebg": "url('/circlebg.svg')",
      },
      // keyframes: {
      //   fade: {
      //     "0%": { opacity: "0" },
      //     "20%": { opacity: "1" },
      //     "80%": { opacity: "1" },
      //     "100%": { opacity: "0" },
      //   },
      // },
      // animation: {
      //   fade: "fade 10s ease-in-out infinite",
      // },
    },
  },
  plugins: [],
};
export default config;
