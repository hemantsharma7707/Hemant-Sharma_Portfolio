/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00FF88',
          50: '#E6FFF3',
          100: '#B3FFD9',
          200: '#80FFBF',
          300: '#4DFFA6',
          400: '#1AFF8C',
          500: '#00FF88',
          600: '#00CC6D',
          700: '#009952',
          800: '#006636',
          900: '#00331B',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          50: '#1A1A1A',
          100: '#141414',
          200: '#111111',
          300: '#0D0D0D',
          400: '#0A0A0A',
          500: '#080808',
          600: '#050505',
          700: '#030303',
          800: '#020202',
          900: '#000000',
        },
        gray: {
          DEFAULT: '#888888',
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#C0C0C0',
          300: '#A0A0A0',
          400: '#888888',
          500: '#6B6B6B',
          600: '#555555',
          700: '#3A3A3A',
          800: '#2A2A2A',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
