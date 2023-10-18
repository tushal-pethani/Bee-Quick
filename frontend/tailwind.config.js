/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        primary: "#FFFFFF", /*Background */
        secondary: "#FFC629",/*Buttons, sections */
        tertiary: "#fff7de", /*Navbar  */
        text: "#000000",
        footer: "#1d252c"
      },
      fontFamily:
      {
        body: ['QuickSand','serif'],
        title: ['Cinzel','cursive'],
        button: ['Nunito Sans','serif'],
        footer: ['Cabin','cursive']
      }
    },
  },
  plugins: [],
}