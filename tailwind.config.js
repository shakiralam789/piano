/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#0d9488',
        'secondary': '#F31559',
      },
      height: {
        'timelineHeight': '250px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.empty-hidden:empty': {
          display: 'none',
        },
      })
    }
  ],
}