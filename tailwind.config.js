/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg: {
          primary: '#080B14',
          secondary: '#0D1117',
          card: '#111827',
          glass: 'rgba(17, 24, 39, 0.6)',
        },
        accent: {
          cyan: '#00D4FF',
          purple: '#7C3AED',
          pink: '#EC4899',
          green: '#10B981',
        },
        text: {
          primary: '#F0F4FF',
          secondary: '#94A3B8',
          muted: '#475569',
        },
        border: {
          primary: 'rgba(148,163,184,0.1)',
          accent: 'rgba(0,212,255,0.3)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,212,255,0.15), transparent)',
        'card-glow': 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.05))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0,212,255,0.3)',
        'glow-purple': '0 0 30px rgba(124,58,237,0.3)',
        'card': '0 4px 30px rgba(0,0,0,0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
