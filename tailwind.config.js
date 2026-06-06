/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        surface: {
          950: '#030305',
          900: '#07070f',
          800: '#0d0d1a',
          700: '#111122',
          600: '#16162e',
          500: '#1c1c3a',
        },
        brand: {
          indigo: '#6366f1',
          violet: '#8b5cf6',
          purple: '#a855f7',
          cyan: '#06b6d4',
          emerald: '#10b981',
          pink: '#ec4899',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)',
        'gradient-brand-h': 'linear-gradient(90deg, #6366f1, #a855f7)',
        'gradient-cyan': 'linear-gradient(135deg, #06b6d4, #6366f1)',
        'hero-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(168,85,247,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.08) 0%, transparent 50%)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
        'border-spin': 'borderSpin 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(1deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        borderSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99, 102, 241, 0.3)',
        'glow-md': '0 0 30px rgba(99, 102, 241, 0.4)',
        'glow-lg': '0 0 60px rgba(99, 102, 241, 0.3)',
        'glow-violet': '0 0 30px rgba(139, 92, 246, 0.4)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
