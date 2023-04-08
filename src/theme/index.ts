import { createTheme, ThemeOptions } from '@mui/material';
import { THEMES } from '../../contants';
import { Barlow, Barlow_Condensed, Bellefair } from '@next/font/google';
import { merge } from 'lodash';
import './typography.d.ts';

const bellefairFont = Bellefair({
  display: 'swap',
  weight: '400',
  subsets: ['latin', 'latin-ext', 'hebrew']
});

const barlowCondensedFont = Barlow_Condensed({
  display: 'swap',
  weight: ['400', '700'],
  subsets: ['latin', 'latin-ext', 'vietnamese']
});

const barlowFont = Barlow({
  display: 'swap',
  weight: '400',
  subsets: ['latin', 'latin-ext', 'vietnamese']
});

const baseTheme: ThemeOptions = {
  typography: {
    ...bellefairFont.style,
    h1: {
      fontSize: '9.375rem',
      fontWeight: 400,
      lineHeight: 1.146666666666667
    },
    h2: {
      fontSize: '6.25rem',
      fontWeight: 400,
      lineHeight: 1.15
    },
    h3: {
      fontSize: '3.5rem',
      fontWeight: 400,
      lineHeight: 1.142857142857143
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 400,
      lineHeight: 1.15625
    },
    h5: {
      fontFamily: barlowCondensedFont.style.fontFamily,
      fontSize: '1.75rem',
      letterSpacing: '4.725px'
    },
    subheading1: {
      fontSize: '1.75rem',
      lineHeight: 1.142857142857143
    },
    subheading2: {
      ...barlowCondensedFont.style,
      fontSize: '0.875rem',
      lineHeight: 1.214285714285714,
      letterSpacing: '2.3625px'
    },
    nav: {
      ...barlowCondensedFont.style,
      fontSize: '1rem',
      lineHeight: 1.1875,
      letterSpacing: '2.7px'
    },
    body1: {
      ...barlowFont.style,
      fontSize: '1.125rem',
      lineHeight: 1.777777777777778
    }
  }
};

const themes: Record<string, ThemeOptions> = {
  [THEMES.DARK]: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#0B0D17'
      },
      secondary: {
        main: '#D0D6F9'
      },
      background: {
        default: '#0B0D17'
      }
    }
  }
};

export default createTheme(merge({}, baseTheme, themes[THEMES.DARK]));
