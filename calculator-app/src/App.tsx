import { Box, Container, CssBaseline, styled } from '@mui/material';
import ThemeProvider from './contexts/Theme';
import Screen from './components/Screen';
import { lazy, Suspense, useState } from 'react';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';

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
      <AppRoot>
        <Container>
          <Box className='layout' role='application' aria-roledescription='simple calaculator'>
            <Header />
            <Screen result={result} expression={expression} />
            <Suspense fallback={<LoadingScreen />}>
              <Keypad
                expression={expression}
                setExpression={setExpression}
                onEquals={result => {
                  setResult(result);
                }}
              />
            </Suspense>
            {/*<Comp />*/}
          </Box>
        </Container>
      </AppRoot>
    </ThemeProvider>
  );
}
