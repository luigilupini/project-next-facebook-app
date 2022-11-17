/** @type {import('tailwindcss').Config} */
// Since JIT mode generates your CSS on-demand by scanning your template files,
// it’s crucial that you configure the purge option in your tailwind.config.js
// file with all of your template paths, otherwise your CSS will be empty.
// https://v2.tailwindcss.com/docs/just-in-time-mode
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
