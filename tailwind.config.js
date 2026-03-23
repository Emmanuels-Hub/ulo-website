/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'float-slow': 'floatY 6s ease-in-out infinite',
        'float-medium': 'floatY 4s ease-in-out infinite',
        'float-fast': 'floatY 3s ease-in-out infinite',
        'fade-up': 'fadeInUp 0.8s ease-out forwards'
      }
    },
  },
  plugins: [],
}

