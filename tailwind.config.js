module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,js}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'daily-dev-tips': "#F89283",
        'text-color': '#5b5b5b',
        'gray': '#EEEEEE',
        'secondarycolor': '#47465A'
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
