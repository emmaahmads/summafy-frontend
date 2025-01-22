module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        barbiePink: '#E0218A',
        barbiePurple: '#D0006F',
        barbieBlue: '#00AEEF',
      },
      fontFamily: {
        barbie: ['"Comic Sans MS"', 'cursive'],
      },
    },
  },
  plugins: [],
}