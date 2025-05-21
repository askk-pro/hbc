module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{
    js,ts,jsx,tsx
  }'],
  theme: {
    extend: {
      colors: {
        primary: '#F77F00',
        secondary: '#5C3A21',
        accent: '#FFD700',
        green: '#A3B18A',
        indigo: '#2C2C54',
        background: {
          light: '#FFF8E7',
          dark: '#1A1A1A',
        },
        text: {
          light: '#1A1A1A',
          dark: '#EEE',
        },
        card: {
          light: '#FFFFFF',
          dark: '#2C2C54',
        },
        error: '#B00020',
        success: '#4CAF50',
        info: '#1976D2',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sanskrit: ['Tiro Devanagari Sanskrit', 'serif']
      },
      fontSize: {
        headline: '2rem',
        subhead: '1.5rem',
        body: '1rem',
        caption: '0.8125rem',
      }
    }
  },
  plugins: []
};
