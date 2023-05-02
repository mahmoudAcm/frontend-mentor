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
      lineHeight: 1.5,
      fontWeight: 500
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '&:root': {
          '--light-gray': '#E9EBF0',
          '--vary-light-gray': '#F5F6FA'
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
