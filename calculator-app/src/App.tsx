import { Box, Container, CssBaseline, Fade, styled } from '@mui/material';
import ThemeProvider from './contexts/Theme';
import { lazy, Suspense, useState } from 'react';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';

const Screen = lazy(() => import('./components/Screen'));
const Keypad = lazy(() => import('./components/Keypad'));

const AppRoot = styled(Box)(({ theme }) => ({
  minHeight: '100vh',

  '& .layout': {
    width: '538px',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    alignItems: 'center',
    paddingTop: '111px',
    paddingBottom: '96px',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}));

export default function App() {
  const [result, setResult] = useState('0');
  const [expression, setExpression] = useState('');

  return (
    <ThemeProvider>
      <CssBaseline />
      <Suspense fallback={<LoadingScreen />}>
        <Fade in={true}>
          <AppRoot>
            <Container>
              <Box className='layout' role='application' aria-roledescription='simple calaculator'>
                <Header />
                <Screen result={result} expression={expression} />
                <Keypad
                  expression={expression}
                  setExpression={setExpression}
                  onEquals={result => {
                    setResult(result);
                  }}
                />
                {/*<Comp />*/}
              </Box>
            </Container>
          </AppRoot>
        </Fade>
      </Suspense>
    </ThemeProvider>
  );
}
