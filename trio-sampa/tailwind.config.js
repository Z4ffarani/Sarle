/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        designRed: '#FF3030'
      },
      keyframes: {
        outdoor: {
          '0%': { transform: 'translateX(145%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        outdoor: 'outdoor 10s linear infinite'
      },
    },
  },
  plugins: [],
}
