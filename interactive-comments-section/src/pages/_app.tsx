import '@/src/styles/globals.css';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps as DefaultAppProps } from 'next/app';
import createEmotionCache from '../libs/createEmotionCache';
import { FunctionComponent } from 'react';
import theme from '@/src/theme';
import Direction from '@/src/components/Directions';
import { Provider } from 'react-redux';
import store from '@/src/store';

const clientSideEmotionCache = createEmotionCache();

interface AppProps extends DefaultAppProps {
  emotionCache?: EmotionCache;
}

const App: FunctionComponent<AppProps> = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Direction direction='ltr'>
            <CssBaseline />
            <Component {...pageProps} />
          </Direction>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default App;
