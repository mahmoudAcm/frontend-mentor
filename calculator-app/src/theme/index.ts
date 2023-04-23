import { createTheme, ThemeOptions } from '@mui/material';
import { THEMES } from '../constants';

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: "'League Spartan', sans-serif",
    fontWeightBold: 700
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => {
          let shadowColor = 'var(--btn-default-shadow)';
          let hoverColor = 'var(--btn-default-hover)';
          if (ownerState.variant === 'contained') {
            if (ownerState.color === 'primary') {
              shadowColor = theme.palette.primary.dark;
              hoverColor = theme.palette.primary.light;
            } else {
              shadowColor = theme.palette.secondary.dark;
              hoverColor = theme.palette.secondary.light;
            }
          }
          return {
            backgroundColor: !ownerState.variant || ownerState.variant == 'text' ? 'var(--btn-default-bg)' : '',
            boxShadow: `0 4px 0 ${shadowColor} !important`,
            borderRadius: '8px',
            '&:active': {
              boxShadow: `0 1.5px 0 ${shadowColor} !important`
            },
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
  [THEMES.THEME1]: {
    palette: {
      primary: {
        main: 'hsl(6, 63%, 50%)',
        light: 'hsl(6, 93%, 67%)',
        dark: 'hsl(6, 70%, 34%)'
      },
      secondary: {
        main: 'hsl(225, 21%, 49%)',
        light: 'hsl(224, 51%, 76%)',
        dark: 'hsl(224, 28%, 35%)'
      },
      background: {
        default: 'hsl(222, 26%, 31%)',
        paper: 'hsl(223, 31%, 20%)'
      },
      text: {
        primary: 'hsl(221, 14%, 31%)',
        secondary: 'hsl(0, 0%, 100%)'
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            '--bg-screen': 'hsl(224, 36%, 15%)',
            '--btn-default-bg': 'hsl(32, 25%, 88%)',
            '--btn-default-shadow': 'hsl(21, 16%, 66%)',
            '--btn-default-hover': 'white'
          }
        }
      }
    }
  },
  [THEMES.THEME2]: {
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
            '--btn-default-bg': '#E5E4E0',
            '--btn-default-shadow': 'hsl(35, 11%, 61%)',
            '--btn-default-hover': 'white'
          }
        }
      }
    }
  },
  [THEMES.THEME3]: {
    palette: {
      primary: {
        main: 'hsl(176, 100%, 44%)',
        light: 'hsl(177, 91%, 77%)',
        dark: 'hsl(177, 92%, 70%)'
      },
      secondary: {
        main: 'hsl(281, 89%, 26%)',
        light: 'hsl(280, 56%, 44%)',
        dark: 'hsl(286, 91%, 52%)'
      },
      background: {
        default: 'hsl(268, 75%, 9%)',
        paper: 'hsl(268, 71%, 12%)'
      },
      text: {
        primary: 'hsl(52, 100%, 62%)',
        secondary: 'hsl(198, 20%, 13%)'
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            '--bg-screen': 'hsl(268, 71%, 12%)',
            '--btn-default-bg': '#331B4D',
            '--btn-default-shadow': 'hsl(288, 67.54%, 37.45%)',
            '--btn-default-hover': '#6B34AC'
          }
        }
      }
    }
  }
};

export default function createCustomTheme(config: { theme?: string }) {
  let theme = themes[config.theme!];

  if (!theme) {
    console.warn('You passed the wrong theme!');
    theme = themes[THEMES.THEME2];
  }

  return createTheme({}, baseTheme, theme);
}
