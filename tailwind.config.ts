/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  darkMode: ['class', '[data-theme="light"]'],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=winter]'],
          'primary': '#0096c7',
          'secondary': '#105652',
          'neutral': '#f8f7ff',
          'secondary-focus': '#0c524e',
          'secondary-content': '#e6f2f2',
          'accent': '#e5e5e5',
          'accent-focus': '#f5e9d3',
          'accent-content': '#170f01',
          '--rounded-box': '0.375rem',
          '--rounded-btn': '0.375rem',
          '--btn-text-case': 'none'
        },
      }
    ]
  }
}
