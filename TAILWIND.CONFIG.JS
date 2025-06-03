module. exports = {
    content: [
    "./index.html" ,
    "./src/**/*.{js,ts,jsx,tsx}",
    ], 
    extend: {
        fontFamily: {
          headline: ['Monoton', 'sans-serif'],
        }
      },
    plugins: [require('daisyui')],
    
};