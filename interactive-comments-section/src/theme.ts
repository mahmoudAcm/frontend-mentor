import { createTheme } from '@mui/material';
import { Rubik } from 'next/font/google';

const rubikFont = Rubik({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin', 'latin-ext', 'cyrillic-ext', 'cyrillic', 'hebrew']
});

export default createTheme({
  palette: {
    primary: {
      main: '#5357B6',
      light: '#C5C6EF'
    },
    secondary: {
      main: '#ED6368',
      light: '#FFB8BB'
    },
    background: {
      default: '#F5F6FA'
    },
    text: {
      primary: '#334253',
      secondary: '#67727E'
    }
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: rubikFont.style.fontFamily,
    h1: {
      fontSize: '1.5rem',
      lineHeight: 1.1666666667,
      fontWeight: 500
    },
    h2: {
      fontSize: '1rem',
      lineHeight: 1.1875,
      fontWeight: 500
    },
    body1: {
      lineHeight: 0.6666666667,
      fontWeight: 500
    }
  }
});
