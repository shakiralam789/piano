/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
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