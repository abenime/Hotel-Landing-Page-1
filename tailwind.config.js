/**** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fdf9f3',
          100: '#f6ecdb',
          200: '#ead7ba',
          300: '#d4b98a',
          400: '#bd9b64'
        },
        ocean: {
          50: '#ecfbff',
          100: '#c8efff',
          200: '#9cdefa',
          300: '#68c7f3',
          400: '#35a9db',
          500: '#2389b8',
          600: '#1a6d96'
        },
        forest: {
          500: '#2f6f62',
          600: '#23564c'
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', '"Segoe UI"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.15)'
      }
    }
  },
  plugins: []
};
