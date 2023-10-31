/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light-login-bg': "url('@/images/light.jpg')",
        'night-login-bg': "url('@/images/night.jpg')"
      }
    },
  },
  plugins: [],
}

