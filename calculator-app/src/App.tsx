import { Box, Container, CssBaseline, styled } from '@mui/material';
import ThemeProvider from './contexts/Theme';
import Screen from './components/Screen';
import Keypad from './components/Keypad';

const AppRoot = styled(Box)(() => ({
  minHeight: '100vh'
}));

export default function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <AppRoot>
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'center',
              paddingTop: '93px',
              paddingBottom: '96px'
            }}
          >
            <Screen />
            <Keypad />
          </Box>
        </Container>
      </AppRoot>
    </ThemeProvider>
  );
}
