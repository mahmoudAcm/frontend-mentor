import { CssBaseline, ThemeProvider } from "@mui/material";
import { createCustomeTheme } from "./theme";
import StepperLayout from "./components/Stepper/StepperLayout";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import Comp from "./comp";

export default function App() {
  const theme = createCustomeTheme({ theme: "LIGHT" });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StepperLayout>
        <SelectPlan />
      </StepperLayout>
      {/* <Comp /> */}
    </ThemeProvider>
  );
}
