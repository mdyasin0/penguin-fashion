/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
          'sm-max': { 'max': '639px' },
          'md-max': { 'max': '767px' },  
          'lg-max': { 'max': '1023px' }, 
          'xl-max': { 'max': '1279px' }, 
        },
      },
    },
    plugins: [],
  }