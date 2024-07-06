/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      
      colors: {
        limeGreen: '#18FD6D',
        violetBlue: '#0F0225',
        darkBlueGradient: 'linear-gradient(180deg, #0F0225 0%, #000000 100%)',
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      backgroundColor: {
        'glassmorphic': 'rgba(255, 255, 255, 0.2)',
      },
    },
  },

};


