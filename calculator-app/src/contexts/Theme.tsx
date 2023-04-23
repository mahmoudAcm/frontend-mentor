import { createContext, Dispatch, ReactNode, useState } from 'react';
import { ThemeProvider as DefaultThemeProvider } from '@mui/material';
import createCustomTheme from '../theme';
import { THEMES } from '../constants';

export const ThemeContext = createContext({
  theme: THEMES.THEME2,
  setTheme: ((theme: string) => theme) as Dispatch<string>
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(THEMES.THEME2);

  return (
    <DefaultThemeProvider theme={createCustomTheme({ theme })}>
      <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    </DefaultThemeProvider>
  );
}
