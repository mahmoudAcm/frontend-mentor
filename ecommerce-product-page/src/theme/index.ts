import { createTheme } from '@mui/material';
import { Kumbh_Sans } from 'next/font/google';

const kumbhSansFont = Kumbh_Sans({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin']
});

export const theme = createTheme({
  typography: {
    ...kumbhSansFont.style
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 639,
      md: 965,
      lg: 1110,
      xl: 1536
    }
  }
});
