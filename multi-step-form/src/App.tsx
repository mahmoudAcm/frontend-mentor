import { CssBaseline, ThemeProvider } from "@mui/material";
import { createCustomeTheme } from "./theme";
import Stepper from "./components/Stepper";

export default function App() {
  const theme = createCustomeTheme({ theme: "LIGHT" });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stepper />
    </ThemeProvider>
  );
}
