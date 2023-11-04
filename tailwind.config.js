/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#832B8C',
        'pink': '#B34A72',
        'cardBg': '#393430',
        'cardBgHover': '#3B3939',
        'lightTextColor': '#99908D',
      },
    },
  },
  plugins: [],
}