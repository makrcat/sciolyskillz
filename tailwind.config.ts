import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    //...
  ],
  theme: {
    //...
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;