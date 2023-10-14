/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        grnavgreen: '#217267',
        grbodydark: '#2B2D42',
        grtextlight: '#EDF2F4',
        grbtnred: '#EF233C',
        grbtnhover: '#F53E53'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

