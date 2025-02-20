/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }, 
      colors: {
    'green-haze': {
    '50': '#ebfef5',
    '100': '#d0fbe5',
    '200': '#a4f6d1',
    '300': '#6aebb9',
    '400': '#2fd89b',
    '500': '#0abf84',
    '600': '#009b6c',
    '700': '#007c5a',
    '800': '#036248',
    '900': '#04503d',
    '950': '#012d23',
    'white': {
    '50': '#ffffff',
    '100': '#efefef',
    '200': '#dcdcdc',
    '300': '#bdbdbd',
    '400': '#989898',
    '500': '#7c7c7c',
    '600': '#656565',
    '700': '#525252',
    '800': '#464646',
    '900': '#3d3d3d',
    '950': '#292929',
    },
                  },
    },
    },
  },
  plugins: [],
}