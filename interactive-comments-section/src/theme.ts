import { createTheme } from '@mui/material';
import { Rubik, Plus_Jakarta_Sans } from 'next/font/google';

const rubikFont = Rubik({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin', 'latin-ext', 'cyrillic-ext', 'cyrillic', 'hebrew']
});

const plusJakartaSansFont = Plus_Jakarta_Sans({
  weight: ['500', '600', '700', '800'],
  display: 'swap',
  subsets: ['latin', 'latin-ext', 'cyrillic-ext']
});

export default createTheme({
  palette: {
    primary: {
      main: 'hsl(244, 44%, 48%)',
      light: 'hsl(243, 29%, 86%)'
    },
    secondary: {
      main: 'hsl(357, 76%, 59%)',
      light: 'hsl(357, 100%, 80%)'
    },
    background: {
      default: 'hsl(240, 17%, 98%)'
    },
    text: {
      primary: 'hsl(206, 19%, 32%)',
      secondary: 'hsl(211, 10%, 45%)'
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
      lineHeight: 1.5,
      fontWeight: 500
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '&:root': {
          '--light-gray': 'hsl(224, 19%, 93%)',
          '--vary-light-gray': 'hsl(228, 33%, 97%)',
          '--shadow': 'rgba(0, 0, 0, 0.08) 0px 3px 14px',
          '--rubik-font': rubikFont.style.fontFamily,
          '--plus-jakarta-font': plusJakartaSansFont.style.fontFamily
          // scrollbarGutter: 'stable'
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          fontSize: '1rem',
          lineHeight: 1.5
        },
        contained: ({ theme, ownerState }) => ({
          '--btn-bg-hover': theme.palette[ownerState.color === 'primary' ? 'primary' : 'secondary'].light,
          '&:hover': {
            background: 'var(--btn-bg-hover)'
          }
        })
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: 'none',
          marginLeft: '16px',
          marginRight: '16px'
        }
      }
    },
    MuiDialogTitle: {
      defaultProps: {
        component: 'h1',
        variant: 'h1'
      },
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '32px',
          paddingBottom: '20px',
          [theme.breakpoints.down('sm')]: {
            fontSize: '1.25rem',
            padding: '24px 28px 16px 27px'
          }
        })
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '0 32px 20px',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
          [theme.breakpoints.down('sm')]: {
            padding: '0 27px 8px 28px'
          }
        })
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '0px 32px 32px',
          [theme.breakpoints.down('sm')]: {
            padding: '8px 28px 24px 27px'
          }
        })
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536
    }
  }
});
