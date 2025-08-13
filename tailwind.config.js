/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'mono': ['Courier New', 'monospace'],
        },
        animation: {
          'typing': 'typing 3.5s steps(40, end)',
          'blink': 'blink 1s infinite',
        },
        keyframes: {
          typing: {
            'from': { width: '0' },
            'to': { width: '100%' },
          },
          blink: {
            '0%, 50%': { opacity: '1' },
            '51%, 100%': { opacity: '0' },
          },
        },
      },
    },
    plugins: [],
  }