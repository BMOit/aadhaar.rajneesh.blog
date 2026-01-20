import type { Config } from "tailwindcss";

const config: Config = {
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
};

export default config;
