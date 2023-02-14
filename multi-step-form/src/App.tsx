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
import ThankYou from "./components/ThankYou";

const currentStep = 1;
const width = {
  0: 667,
  1: 695,
};

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
                width: "100%",
                display: "flex",
                flexDirection: "column",
                minHeight: width[currentStep],
              },
            },
          },
        }}
      />
      <MobileHeader />
      <Container sx={{ flex: 1 }}>
        <StepperLayout>
          <ThankYou />
        </StepperLayout>
      </Container>
      {/* <NextAndPrev className="mobile" /> */}
      {/* <Comp /> */}
    </ThemeProvider>
  );
}
