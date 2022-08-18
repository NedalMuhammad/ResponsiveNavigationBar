module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,js}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'daily-dev-tips': "#F89283"
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'sans', 'cursive'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
