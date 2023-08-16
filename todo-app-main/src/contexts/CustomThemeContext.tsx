import { THEMES } from '@/src/constants';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { useCustomTheme } from '@/src/theme';

type Mode = keyof typeof THEMES;

interface State {
  mode: Mode;
  toggleTheme: () => void;
}

export const CustomThemeContext = createContext<State | null>(null);

export function CustomThemeProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<Mode>('LIGHT');
  const theme = useCustomTheme(mode);

  const toggleTheme = () => {
    const newMode = mode === 'DARK' ? 'LIGHT' : 'DARK';
    localStorage.setItem('theme', newMode);
    setMode(newMode);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const mode = mediaQuery.matches ? 'DARK' : 'LIGHT';
    setMode((localStorage.getItem('theme') as Mode) || mode);
    setLoading(false);

    const handleColorSchemeChange = (e: any) => {
      const mode = e.matches ? 'DARK' : 'LIGHT';
      localStorage.setItem('theme', mode);
      setMode(mode);
    };

    mediaQuery.addEventListener('change', handleColorSchemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleColorSchemeChange);
    };
  }, []);

  return (
    <CustomThemeContext.Provider
      value={{
        mode,
        toggleTheme
      }}
    >
      {!loading && <ThemeProvider theme={theme}>{children}</ThemeProvider>}
    </CustomThemeContext.Provider>
  );
}
