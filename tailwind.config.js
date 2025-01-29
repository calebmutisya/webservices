/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Custom screen size for extra small devices
        'sm': '640px', // Small devices (default Tailwind breakpoint)
        'md': '768px', // Medium devices (default Tailwind breakpoint)
        'lg': '1024px', // Large devices (default Tailwind breakpoint)
        'xl': '1280px', // Extra large devices (default Tailwind breakpoint)
        '2xl': '1536px', // 2X large devices (default Tailwind breakpoint)
      },
    },
  },
  plugins: [],
}

