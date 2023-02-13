import {
  Container,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import { createCustomeTheme } from "./theme";
import StepperLayout from "./components/Stepper/StepperLayout";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import Comp from "./comp";
import PickAddOns from "./components/PickAddOns";
import Summary from "./components/Summary";
import MobileHeader from "./components/MobileHeader";
import NextAndPrev from "./components/Stepper/NextAndPrev";

export default function App() {
  const theme = createCustomeTheme({ theme: "LIGHT" });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            [theme.breakpoints.down("lg")]: {
              alignItems: "flex-start",
              justifyContent: "flex-start",
              "& #root": {
                display: "flex",
                flexDirection: "column",
                minHeight: 667,
              },
            },
          },
        }}
      />
      <MobileHeader />
      <Container sx={{ flex: 1 }}>
        <StepperLayout>
          <PersonalInfo />
        </StepperLayout>
      </Container>
      <NextAndPrev className="mobile" />
      {/* <Comp /> */}
    </ThemeProvider>
  );
}
