/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 紫色主题色系
        primary: {
          DEFAULT: '#8B3DAF',
          dark: '#6B2D8F',
          light: '#A855F7',
          lighter: '#C084FC',
        },
        // 背景色系
        background: {
          DEFAULT: '#0A0E27',
          light: '#0F1629',
          lighter: '#151B32',
        },
        // 文字色系
        text: {
          primary: '#FFFFFF',
          secondary: '#E2E8F0',
          muted: '#94A3B8',
        },
        // 功能色
        functional: {
          cyan: '#00D4FF',
          blue: '#0EA5E9',
          green: '#10B981',
        },
      },
      fontFamily: {
        sans: ['PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-purple': 'linear-gradient(135deg, #6B2D8F 0%, #A855F7 50%, #00D4FF 100%)',
        'gradient-purple-dark': 'linear-gradient(135deg, #0A0E27 0%, #151B32 50%, #0F1629 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #A855F7, 0 0 10px #A855F7, 0 0 15px #A855F7' },
          '100%': { boxShadow: '0 0 10px #A855F7, 0 0 20px #A855F7, 0 0 30px #A855F7' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
