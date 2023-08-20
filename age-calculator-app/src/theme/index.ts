import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif"
  },
  palette: {
    background: {
      default: 'hsl(0, 0%, 94%)',
      paper: 'hsl(0, 0%, 100%)'
    }
  }
});
