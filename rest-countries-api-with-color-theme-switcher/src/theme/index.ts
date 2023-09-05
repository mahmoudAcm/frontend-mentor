import { alpha, createTheme, ThemeOptions } from '@mui/material';
import { Nunito_Sans } from 'next/font/google';
import { THEMES } from '@/src/constants';

const nunitoSansFont = Nunito_Sans({
  weight: ['300', '400', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
});

const baseOptions: ThemeOptions = {
  typography: {
    ...nunitoSansFont.style
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          margin: 'auto',
          textTransform: 'none',
          background: theme.palette.background.paper,
          padding: '8px 25px',
          color: theme.palette.text.primary,
          transition: '0s',
          '--_shadow-color': theme.palette.__mode === 'DARK' ? 'hsl(205, 31%, 14%)' : 'hsl(0, 0%, 87%)',
          boxShadow: '0 0 20px var(--_shadow-color)',
          '&:hover': {
            background: alpha(theme.palette.background.paper, 0.5)
          },
          '&.Mui-disabled': {
            color: alpha(theme.palette.text.primary, 0.5),
            pointerEvents: 'auto',
            cursor: 'not-allowed'
          }
        })
      }
    }
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
        default: 'hsl(205, 25%, 17%)',
        paper: 'hsl(210, 22%, 22%)'
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
