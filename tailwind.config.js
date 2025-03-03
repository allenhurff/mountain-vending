/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        'coke-red': {
          50: '#FFEBEE',
          100: '#FFCDD2',
          200: '#EF9A9A',
          300: '#E57373',
          400: '#EF5350',
          500: '#F40009', // Coca-Cola Red
          600: '#D50000',
          700: '#C62828',
          800: '#B71C1C',
          900: '#8E0000',
        },
        'coke-black': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        'coke-white': {
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FFFFFF',
          600: '#F5F5F5',
          700: '#EEEEEE',
          800: '#E0E0E0',
          900: '#BDBDBD',
        },
      },
      fontFamily: {
        sans: ['TCCC-UnityText', 'Gotham', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['TCCC-UnityHeadline', 'Gotham', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['TCCC-UnityHandwriting', 'cursive'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
