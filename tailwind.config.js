/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url(https://img.freepik.com/premium-vector/abstract-plexus-technology-futuristic-network-connecting-lines-dots-vector-illustration-background_551880-271.jpg?size=626&ext=jpg&ga=GA1.1.1938564188.1691954744&semt=ais)",
        'carbackground': "url(https://img.freepik.com/free-photo/3d-car-with-simple-background_23-2150796868.jpg?size=626&ext=jpg&ga=GA1.1.1938564188.1691954744&semt=ais)",
        'backdrop': "url(https://img.freepik.com/free-vector/gradient-dark-dynamic-lines-background_23-2148995950.jpg?size=626&ext=jpg&ga=GA1.1.1938564188.1691954744&semt=ais)",
        'vector': "url(https://img.freepik.com/free-photo/metallic-color-sport-car-bridge_114579-4082.jpg?size=626&ext=jpg&ga=GA1.1.1938564188.1691954744&semt=ais)",
        'head-pic': "url(https://img.freepik.com/free-photo/view-3d-car_23-2150796982.jpg?size=626&ext=jpg&ga=GA1.1.1938564188.1691954744&semt=ais)",
        'buy-pic': "url(https://img.freepik.com/free-photo/3d-car-with-simple-background_23-2150797048.jpg?size=626&ext=jpg&ga=GA1.1.1938564188.1691954744&semt=ais)",
      },
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif'],
        'overpass-medium': ['Overpass', 'sans-serif'],
        'light-rubik': ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}