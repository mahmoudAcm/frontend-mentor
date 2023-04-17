import { Box, Container, CssBaseline, styled } from '@mui/material';
import ThemeProvider from './contexts/Theme';
import Screen from './components/Screen';

const AppRoot = styled(Box)(() => ({
  minHeight: '100vh'
}));

export default function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <AppRoot>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '93px' }}>
            <Screen />
          </Box>
        </Container>
      </AppRoot>
    </ThemeProvider>
  );
}
