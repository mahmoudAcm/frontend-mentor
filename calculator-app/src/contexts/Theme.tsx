import { createContext, ReactNode } from 'react';
import { ThemeProvider as DefaultThemeProvider } from '@mui/material';
import createCustomTheme from '../theme';

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <DefaultThemeProvider theme={createCustomTheme({ theme: 'LIGHT' })}>
      <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
    </DefaultThemeProvider>
  );
}
