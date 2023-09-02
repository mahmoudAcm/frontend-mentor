import {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import {
  PaletteMode,
  createTheme,
  useTheme as mainUseTheme,
  ThemeProvider as MainThemeProvider,
} from "@mui/material";
import useLocalStorage from "@common/hooks/useLocalStorage";

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

const useGetModeFromBrowserStorage = (
  setMode: Dispatch<SetStateAction<PaletteMode | null>>
) => {
  useEffect(() => {
    const mode = JSON.parse(localStorage.getItem("mode-v2")!) ?? "light";
    setMode(mode as PaletteMode);
  }, []);
};

export default function ThemeProvider({ children }: { children: JSX.Element }) {
  const [mode, setMode] = useLocalStorage<PaletteMode | null>(null, "mode-v2");

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode | null) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  useGetModeFromBrowserStorage(setMode);

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode ?? "light")),
    [mode]
  );

  if (!mode) return <></>;

  return (
    <Context.Provider value={{ toggleColorMode: colorMode.toggleColorMode }}>
      <MainThemeProvider theme={theme}>{children}</MainThemeProvider>
    </Context.Provider>
  );
}
