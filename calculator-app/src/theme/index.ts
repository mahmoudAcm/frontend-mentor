import { createTheme, ThemeOptions } from '@mui/material';
import { THEMES } from '../constants';

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: "'League Spartan', sans-serif"
  }
};

const themes = {
  [THEMES.LIGHT]: {},
  [THEMES.DARK1]: {},
  [THEMES.DARK2]: {}
};

export default function createCustomTheme(config: { theme?: keyof typeof THEMES }) {
  let theme = themes[config.theme!];

  if (!theme) {
    console.warn('You passed the wrong theme!');
    theme = themes[THEMES.LIGHT];
  }

  return createTheme(baseTheme, theme);
}
