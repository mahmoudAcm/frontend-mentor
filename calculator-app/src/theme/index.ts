import { createTheme, ThemeOptions } from '@mui/material';
import { THEMES } from '../constants';

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: "'League Spartan', sans-serif",
    fontWeightBold: 700
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'League Spartan', sans-serif"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => {
          let shadowColor = 'var(--btn-default-shadow)';
          let hoverColor = 'white';
          if (ownerState.variant === 'contained') {
            if (ownerState.color === 'primary') {
              shadowColor = theme.palette.primary.dark;
              hoverColor = theme.palette.primary.light;
            } else {
              shadowColor = theme.palette.secondary.dark;
              hoverColor = theme.palette.secondary.light;
            }
          }

          const isDefaultVariant = !ownerState.variant || ownerState.variant == 'text';
          return {
            fontFamily: "'League Spartan', sans-serif",
            backgroundColor: isDefaultVariant ? '#E5E4E0' : '',
            color: isDefaultVariant ? theme.palette.text.primary : '',
            boxShadow: `0 3.5px 0 ${shadowColor} !important`,
            borderRadius: '8px',
            '&:hover': {
              background: hoverColor
            }
          };
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.down('sm')]: {
            paddingLeft: '24px',
            paddingRight: '24px'
          }
        })
      }
    }
  }
};

const themes: Record<string, ThemeOptions> = {
  [THEMES.LIGHT]: {
    palette: {
      primary: {
        main: 'hsl(25, 98%, 40%)',
        light: 'hsl(25, 98%, 61%)',
        dark: 'hsl(25, 99%, 27%)'
      },
      secondary: {
        main: 'hsl(185, 42%, 37%)',
        light: 'hsl(185, 40.81%, 56%)',
        dark: 'hsl(185, 58%, 25%)'
      },
      background: {
        default: 'hsl(0, 0%, 90%)',
        paper: 'hsl(0, 5%, 81%)'
      },
      text: {
        primary: 'hsl(60, 10%, 19%)',
        secondary: 'hsl(0, 0%, 100%)'
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            '--bg-screen': 'hsl(0, 0%, 93%)',
            '--btn-default-shadow': 'hsl(35, 11%, 61%)'
          }
        }
      }
    }
  },
  [THEMES.DARK1]: {},
  [THEMES.DARK2]: {}
};

export default function createCustomTheme(config: { theme?: keyof typeof THEMES }) {
  let theme = themes[config.theme!];

  if (!theme) {
    console.warn('You passed the wrong theme!');
    theme = themes[THEMES.LIGHT];
  }

  return createTheme({}, baseTheme, theme);
}
