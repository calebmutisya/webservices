/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DMSans', 'sans-serif'],
      },
      screens: {
        'xs': '375px',  // Extra small devices (custom)
        'sm': '640px',  // Small devices (default)
        'md': '768px',  // Medium devices (default)
        'lg': '1024px', // Large devices (default)
        'xl': '1280px', // Extra large devices (default)
        '2xl': '1536px', // 2X large devices (default)
        '3xl': '1920px'  // Ultra-wide screens (custom)
      },
    },
  },
  plugins: [],
}

