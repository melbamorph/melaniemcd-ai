import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#f9f7f3',
          100: '#f3ede4',
          200: '#ebe0d2',
          300: '#d8c8b0',
          400: '#c7b095',
          500: '#b1987d',
          600: '#8f755c'
        }
      },
      boxShadow: {
        clay: '10px 10px 20px rgba(0,0,0,0.08), -10px -10px 20px rgba(255,255,255,0.9)',
        'clay-sm': '6px 6px 12px rgba(0,0,0,0.05), -6px -6px 12px rgba(255,255,255,0.8)'
      },
      borderRadius: {
        clay: '18px'
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
