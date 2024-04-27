/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'dark',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',

  ],
  theme: {
    extend: {
      colors: {
        "black-dark": "var(--vt-c-black)",
        "black-soft": "var(--vt-c-black-soft)"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

