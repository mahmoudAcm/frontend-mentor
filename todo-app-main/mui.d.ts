import { THEMES } from '@/src/constants';

declare module '@mui/material/styles' {
  type PaletteMode = keyof typeof THEMES;

  interface PaletteOptions {
    __mode?: PaletteMode;
  }

  interface Palette {
    __mode?: PaletteMode;
  }
}
