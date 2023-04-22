import { Box, Container, CssBaseline, styled } from '@mui/material';
import ThemeProvider from './contexts/Theme';
import Screen from './components/Screen';
import Keypad from './components/Keypad';
import { useState } from 'react';

const AppRoot = styled(Box)(() => ({
  minHeight: '100vh',
  '& .layout': {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    alignItems: 'center',
    paddingTop: '93px',
    paddingBottom: '96px'
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
    </ThemeProvider>
  );
}
