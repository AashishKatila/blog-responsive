import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: "#090D1F",
        offwhite:"#EFEFEF",
        purple: "#6941C6",
        label_bg:"#FDF2FA",
      },
    },
  },
  plugins: [],
};
export default config;
