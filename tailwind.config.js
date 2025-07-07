/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-body)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
        'nav': '900px',
      },
      colors: {
        // Industrial palette
        'industrial-blue': '#00a0dc', // Deeper blue
        'steel': {
          50: '#f5f7fa',
          100: '#e4e8ef',
          200: '#d1d8e0',
          300: '#a9b4c0',
          400: '#8293a6',
          500: '#64738c',
          600: '#4a6fa5',
          700: '#3e4c6a',
          800: '#2d3748',
          900: '#1a202c',
        },
        // Metal-inspired colors
        'metal': {
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#334155',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M10 10h30v30H10V10zm30 0h30v30H40V10zM10 40h30v30H10V40zm30 0h30v30H40V40z\' fill=\'%235E5E5E\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
      },
      boxShadow: {
        'industrial': '2px 2px 0 rgba(0, 0, 0, 0.1)',
        'industrial-lg': '4px 4px 0 rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
