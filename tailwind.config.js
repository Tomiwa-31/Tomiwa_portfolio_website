/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#07080a', 900: '#0c0e12', 800: '#12151b', 700: '#1b1f27', 600: '#2a2f3a' },
        accent: { DEFAULT: '#34d399', dim: '#10b981' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Cascadia Code', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
