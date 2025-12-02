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
        // UIC Brand Colors
        "uic-navy": "#001E62",
        "uic-red": "#D50032",
        "uic-light-blue": "#0073CF",
        "uic-gray": "#6D6E71",
      },
    },
  },
  plugins: [],
};
export default config;
