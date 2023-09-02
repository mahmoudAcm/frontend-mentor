import { createTheme, ThemeOptions } from '@mui/material';
import { Nunito_Sans } from 'next/font/google';
import { THEMES } from '@/src/constants';

const nunitoSansFont = Nunito_Sans({
  weight: ['300', '600', '800'],
  subsets: ['latin'],
  display: 'swap'
});

const baseOptions: ThemeOptions = {
  typography: {
    ...nunitoSansFont.style
  }
};

const themeOptions: Record<keyof typeof THEMES, ThemeOptions> = {
  [THEMES.LIGHT]: {
    palette: {
      __mode: THEMES.LIGHT,
      background: {
        default: 'hsl(0, 0%, 98%)'
      },
      text: {
        primary: 'hsl(240, 4%, 11%)'
      }
    }
  },
  [THEMES.DARK]: {
    palette: {
      __mode: THEMES.DARK,
      background: {
        default: 'hsl(205, 25%, 17%)'
      },
      text: {
        primary: 'hsl(0, 0%, 100%)'
      }
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
