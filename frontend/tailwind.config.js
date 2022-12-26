/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   extend:{
    colors:{
    "dk_white":"white",//white text for dark mode
    "dk_red":"#ef4444",//red text for datk mode
    "lit_red":"#b91c1c",//red text for light mode
    "lit":"black",//black text for light mode
    "litbg":"#f3f4f6",//zinc bg for light mode
    "dkbg":"#111827",//for navbar dark gray for dark mode
    'dkbg_main':"#1f2937"//for main app body light dark gray for dark

   }},
   
  },
  plugins: [],
}
