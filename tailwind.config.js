/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#103855',
          'navy-dark': '#0a2336',
          'navy-light': '#184c70',
          mint: '#97d3cb',
          'mint-light': '#c8ebe7',
          'mint-dark': '#6bb5ab',
          gold: '#fecf8d',
          'gold-light': '#fff0d6',
          'gold-dark': '#e6b063',
          coral: '#f17963',
          'coral-light': '#ffb0a0',
          'coral-dark': '#d95a43',
        },
        surface: {
          light: '#fbfdfd',
          card: '#ffffff',
          subtle: '#f4f8f8',
          border: '#e4ecef',
          muted: '#526b7d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        arabic: ['Almarai', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(16, 56, 85, 0.05)',
        'soft': '0 8px 24px -4px rgba(16, 56, 85, 0.08)',
        'soft-lg': '0 20px 40px -8px rgba(16, 56, 85, 0.12)',
        'coral-glow': '0 10px 25px -5px rgba(241, 121, 99, 0.35)',
        'mint-glow': '0 10px 25px -5px rgba(151, 211, 203, 0.35)',
        'gold-glow': '0 10px 25px -5px rgba(254, 207, 141, 0.35)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
