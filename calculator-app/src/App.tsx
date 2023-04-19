import { Box, Container, CssBaseline, styled } from '@mui/material';
import ThemeProvider from './contexts/Theme';
import Screen from './components/Screen';
import Comp from './comp';

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
              gap: '25px',
              alignItems: 'center',
              paddingTop: '93px'
            }}
          >
            <Screen />
            <Comp />
          </Box>
        </Container>
      </AppRoot>
    </ThemeProvider>
  );
}
