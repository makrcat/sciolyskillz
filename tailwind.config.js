/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  corePlugins: {
    preflight: false, // don't override global base styles
  },
  theme: {
    extend: {},
  },
  plugins: [],
};