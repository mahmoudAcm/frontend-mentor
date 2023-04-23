import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as DefaultThemeProvider } from '@mui/material';
import createCustomTheme from '../theme';
import { THEMES } from '../constants';

export const ThemeContext = createContext({
  theme: THEMES.THEME2,
  setTheme: ((theme: string) => theme) as Dispatch<string>
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, toggleTheme] = useState(THEMES.THEME2);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      toggleTheme(theme);
    }
    setLoading(false);
  }, []);

  if (loading) return;

  return (
    <DefaultThemeProvider theme={createCustomTheme({ theme })}>
      <ThemeContext.Provider
        value={{
          theme,
          setTheme: theme => {
            localStorage.setItem('theme', theme);
            toggleTheme(theme);
          }
        }}
      >
        {children}
      </ThemeContext.Provider>
    </DefaultThemeProvider>
  );
}
