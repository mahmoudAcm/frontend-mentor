'use client';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { ReactNode } from 'react';
import { CustomThemeProvider } from '@/src/contexts/CustomThemeContext';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <CustomThemeProvider>
        <CssBaseline />
        {children}
      </CustomThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}