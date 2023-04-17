import { CssBaseline } from '@mui/material';
import ThemeProvider from './contexts/Theme';

export default function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <div>App</div>
    </ThemeProvider>
  );
}
