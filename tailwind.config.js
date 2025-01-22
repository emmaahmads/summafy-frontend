module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#f1c40f',
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
    },
  },
  variants: {},
  plugins: [],
}