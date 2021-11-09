module.exports = {
  purge: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.ts',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bg-primary': '#d8efff',
        accent: '#ff975a',
        disabled: '#b2b2b2'
      },
      textColor: {
        't-primary': '#2e2e2e',
        't-secondary': '#3e3e3e'
      },
      minWidth: {
        'meeting-item': '256px'
      },
      maxWidth: {
        'md-width': '768px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
