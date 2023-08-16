import { THEMES } from '@/src/constants';
import { createTheme, ThemeOptions } from '@mui/material';
import { Josefin_Sans } from 'next/font/google';

const josefinSansFont = Josefin_Sans({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin']
});

const baseOptions: ThemeOptions = {
  typography: {
    ...josefinSansFont.style
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '&:root::-webkit-scrollbar': {
          width: 1
        }
      }
    }
  }
};

const themeOptions: Record<keyof typeof THEMES, ThemeOptions> = {
  [THEMES.LIGHT]: {
    palette: {
      __mode: 'LIGHT',
      background: {
        default: 'hsl(0, 0%, 98%)',
        paper: 'hsl(0, 0%, 100%)'
      },
      divider: 'hsl(252, 11%, 91%)'
    }
  },
  [THEMES.DARK]: {
    palette: {
      __mode: 'DARK',
      background: {
        default: 'hsl(235, 21%, 11%)',
        paper: 'hsl(235, 24%, 19%)'
      },
      divider: 'hsl(235, 17%, 26%)'
    }
  }
};

export const useCustomTheme = (mode: keyof typeof THEMES) => {
  let theme = themeOptions[mode];

  if (!theme) {
    console.warn('unknown theme was given');
    theme = themeOptions[THEMES.LIGHT];
  }

  return createTheme(baseOptions, theme);
};
