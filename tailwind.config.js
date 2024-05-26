/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "0px",
      margin: "0px",
    },
    extend: {
      fontFamily: {
        lalezar: ["Lalezar"],
        plusjakartasans: ["Plus Jakarta Sans"],
      },
      colors: {
        'hero-bg-right': '#E1D4ED',
        'hero-bg-left': '#E2E4F2',
        'hero-dark-font': '#020014',
        'middle-font': '#0B0A2F',
        'soft-font': '#65636B',
        'button-color': '#762BEB',
        'backdrop' : '#EDD8EF',
        'white' : '#FFFFFF',
        'elipse1' : '#EDD8EF',
        'elipse2' : '#DAD8EF'
      },
    },
  },
  plugins: [],
};
