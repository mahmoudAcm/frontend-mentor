import { createTheme, ThemeOptions } from "@mui/material";
import { THEMES } from "../constants";
import { lightShadows } from "./shadows";

type Theme = keyof typeof THEMES;

const themesOptions: Record<string, ThemeOptions> = {
  [THEMES.LIGHT]: {
    palette: {
      mode: "light",
      primary: {
        main: "#002456",
      },
      secondary: {
        main: "#473dff",
      },
      background: {
        default: "#eef5ff",
      },
      text: {
        primary: "#002456",
        secondary: "#acadb2",
      },
    },
    shadows: lightShadows,
    shape: {
      borderRadius: 16,
    },
    typography: {
      fontFamily: "'Ubuntu', sans-serif",
      htmlFontSize: 16,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  },
};

export const createCustomeTheme = (config: { theme: Theme }) => {
  let themeOptions = themesOptions[config.theme];

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOptions = themesOptions[THEMES.LIGHT];
  }

  return createTheme(themeOptions);
};
