import { Button, CssBaseline } from '@mui/material';
import ThemeProvider from './contexts/Theme';

export default function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <div>
        App
        <Button variant='contained'>=</Button>
        <Button variant='contained' color='secondary'>
          =
        </Button>
        <Button>=</Button>
      </div>
    </ThemeProvider>
  );
}
