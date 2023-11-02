/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "table": "url('./src/assets/home_hero_bkg.jpg')",
      },
      colors: {
        accent: {
          1: "hsl(var(--color-accent1))",
          2: "hsl(var(--color-accent2))",
        },
        bkg: "hsl(var(--color-bkg))",
        content: "hsl(var(--color-content))"

            },
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
};