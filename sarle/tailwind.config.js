/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        designRed: '#952114'
      },
      keyframes: {
        outdoor: {
          '0%': { transform: 'translateX(1200%)' },
          '100%': { transform: 'translateX(-1200%)' }
        }
      },
      animation: {
        outdoor: 'outdoor 15s linear infinite',
      },
    },
  },
  plugins: [],
}
