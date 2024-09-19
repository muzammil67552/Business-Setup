module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver':'#F5F7FA',
        'neutralDGray': '#4D4D4D',
        'brandPrimary': '#4CAF4F',
        'neutralGray' : '#717171',
        'gray-900': '#18191F',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}














































// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//       flowbite.content(),

//   ],
//   theme: {
//     extend: {
//       colors: {
//            'neutralSilver':'#F5F7FA',
//            'neutralDGray': '#4D4D4D',
//            'brandPrimary': '#4CAF4F',
//            'neutralGray' : '#717171',
//            'gray-900': '#18191F',
//       }// 
//     },
//   },
//   plugins: [
//     flowbite.plugin(),
//   ],
// }

