import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme';
import { useEffect, useState } from 'react';
import Header from '@/src/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? (
        <></>
      ) : (
        <>
          <Header />
          <Component {...pageProps} />
        </>
      )}
    </ThemeProvider>
  );
}
