/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mdsans: ["Media Sans Extended", "sans-serif"],
        satoshi: ["Satoshi Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
