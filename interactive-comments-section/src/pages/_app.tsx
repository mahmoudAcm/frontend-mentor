import '@/src/styles/globals.css';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps as DefaultAppProps } from 'next/app';
import createEmotionCache from '../libs/createEmotionCache';
import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import theme from '@/src/theme';
import Direction from '@/src/components/Directions';
import { Provider } from 'react-redux';
import store from '@/src/store';
import { NextPage } from 'next';
import Layout from '@/src/components/Layout';
import GuestGuard from '@/src/components/Auth/GuestGuard';
import AuthGuard from '@/src/components/Auth/AuthGuard';
import Head from 'next/head';
import LoadingScreen from '@/src/components/LoadingScreen';
import AuthProvider from '@/src/contexts/AuthContext';
import MainLoadingScreen from '@/src/components/MainLoadingScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const clientSideEmotionCache = createEmotionCache();

interface AppProps extends DefaultAppProps {
  Component: NextPage;
  emotionCache?: EmotionCache;
}

interface GuardProps {
  children: ReactNode;
  authGuard: boolean;
  guestGuard: boolean;
}

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<LoadingScreen />}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else if (authGuard) {
    return <AuthGuard fallback={<LoadingScreen />}>{children}</AuthGuard>;
  }
  return <></>;
};

const App: FunctionComponent<AppProps> = props => {
  const [loading, setLoading] = useState(true);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page: ReactNode) => <Layout>{page}</Layout>);

  const guestGuard = Component.guestGuard ?? false;
  const authGuard = Component.authGuard ?? false;

  useEffect(() => {
    if (document.fonts && typeof document.fonts.ready !== 'undefined') {
      // Use document.fonts.ready since it is supported
      document.fonts.ready.then(function () {
        setLoading(false);
      });
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <link rel='shortcut icon' href='/favicon-32x32.png' />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Direction direction='ltr'>
            <CssBaseline />
            <ToastContainer
              position='bottom-left'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
            />
            <MainLoadingScreen loading={loading} />
            <AuthProvider>
              <Guard authGuard={authGuard} guestGuard={guestGuard}>
                {getLayout(<Component {...pageProps} />)}
              </Guard>
            </AuthProvider>
          </Direction>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default App;
