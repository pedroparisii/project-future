/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        geistr: ['GeistR', 'sans-serif'],
        geistm: ['GeistM', 'sans-serif'],
        geistl: ['GeistL', 'sans-serif'],
        geistb: ['GeistB', 'sans-serif'],
        asimov: ['Asimov', 'sans-serif'],
      },
      backgroundImage: {
        'profile-picture': "url(/public/profile.jpg)",
        'rank-1': "url(/ranks/1.webp)",
        'rank-2': "url(/ranks/2.webp)",
        'rank-3': "url(/ranks/3.webp)",
        'rank-4': "url(/ranks/4.webp)",
        'rank-5': "url(/ranks/5.webp)",
        'rank-6': "url(/ranks/6.webp)",
        'rank-7': "url(/ranks/7.webp)",
      }
    },
  },
  plugins: [],
}