/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html, js}"],
  darkMode: 'class',
  theme: {
    colors: {
      'all': {
        light: '#FFF6EE',
        dark: '#061419'   
      },
      'footer': {
        light: '#130B5F',
        dark: '#060139'   
      },
      'home': {
        light: '#1454AE',
        dark: '#062249'   
      },
      'gray': {
          900: '#000000',  // Hitam
          800: '#1a1a1a',
          700: '#333333',
          600: '#4d4d4d',
          500: '#666666',
          400: '#808080',
          300: '#999999',
          200: '#b3b3b3',
          100: '#cccccc',
          50: '#e6e6e6',
          25: '#f2f2f2',  // Hampir putih
          0: '#ffffff'
      },
    },

    fontSize: {
      'biggest-size': '2.5rem',
      'big-size': '1.5rem',
      'default-size': '0.938rem',
      'small-size': '0.813rem',
      'smaller-size': '0.75rem',
      'md': {
        'biggest-size': '4.5rem',
        'default-size': '1rem',
        'small-size': '0.875rem',
        'smaller-size': '0.813rem',
      }

    },
      extend: {
        fontFamily: {
          kanit: ['kanit'],
        },
        screens: {
          'xs': '500px',
          'xs-lite': '600px',
          'md-lite': '700px',
          'md': '767px',
        },
      },
  variants: {
    extend: {
      backgroundColor: ['dark'], 
      textColor: ['dark'], 
      borderColor: ['dark'],
    }
  },  
  },
  plugins: [],
}

