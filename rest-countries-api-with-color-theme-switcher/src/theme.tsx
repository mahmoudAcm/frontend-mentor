import { createContext, useState, useMemo, useContext } from "react";
import {
  PaletteMode,
  createTheme,
  useTheme as mainUseTheme,
  ThemeProvider as MainThemeProvider,
} from "@mui/material";

const Context = createContext({
  toggleColorMode: () => {},
});

export const useTheme = () => {
  const theme = mainUseTheme();
  const mode = useContext(Context);
  return {
    ...theme,
    ...mode,
  };
};

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: mode == "light" ? "#ffffff" : "#2b3743",
    },
    secondary: {
      main: mode == "light" ? "#fafafa" : "#202d36",
    },
    background: {
      default: mode == "light" ? "#fafafa" : "#202d36",
      paper: mode == "light" ? "#ffffff" : "#2b3743",
    },
  },
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
  },
});

export default function ThemeProvider({ children }: { children: JSX.Element }) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <Context.Provider value={{ toggleColorMode: colorMode.toggleColorMode }}>
      <MainThemeProvider theme={theme}>{children}</MainThemeProvider>
    </Context.Provider>
  );
}
