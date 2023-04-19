import { Box, Container, CssBaseline, styled } from '@mui/material';
import ThemeProvider from './contexts/Theme';
import Screen from './components/Screen';
import Keypad from './components/Keypad';

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
  return (
    <ThemeProvider>
      <CssBaseline />
      <AppRoot>
        <Container>
          <Box className='layout' role='application' aria-roledescription='simple calaculator'>
            <Screen />
            <Keypad />
            {/*<Comp />*/}
          </Box>
        </Container>
      </AppRoot>
    </ThemeProvider>
  );
}
