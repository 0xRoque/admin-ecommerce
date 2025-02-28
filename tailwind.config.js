/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Diretórios que Tailwind precisa escanear
    './components/**/*.{js,ts,jsx,tsx}', // Diretórios que Tailwind precisa escanear
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
