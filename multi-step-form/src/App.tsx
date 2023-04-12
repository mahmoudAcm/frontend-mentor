import {
  Container,
  CssBaseline,
  GlobalStyles,
  ThemeProvider
} from "@mui/material";
import { lazy, Suspense } from "react";
import StepperContentLoaderScreen from "./components/StepperContentLoaderScreen";
import MobileHeader from "./components/MobileHeader";
import NextAndPrev from "./components/Stepper/NextAndPrev";
import StepperLayout from "./components/Stepper/StepperLayout";
import ThankYou from "./components/ThankYou";
import useForm from "./hooks/useForm";
import { createCustomeTheme } from "./theme";
import LoadingScreen from "./components/LoadingScreen";

//lazy loaded components
const PersonalInfo = lazy(() => import("./components/PersonalInfo"));
const SelectPlan = lazy(() => import("./components/SelectPlan"));
const PickAddOns = lazy(() => import("./components/PickAddOns"));
const Summary = lazy(() => import("./components/Summary"));

export const STEPS: Record<number, { height: number; component: JSX.Element }> = {
  1: { height: 667, component: <PersonalInfo /> },
  2: { height: 695, component: <SelectPlan /> },
  3: { height: 695, component: <PickAddOns /> },
  4: { height: 695, component: <Summary /> },
};

export default function App() {
  const theme = createCustomeTheme({ theme: "LIGHT" });
  const { currentStep, confirmed } = useForm();

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
                minHeight: STEPS[currentStep].height,
              },
            },
          },
        }}
      />
      <LoadingScreen />
      <MobileHeader />
      <Container sx={{ flex: 1 }}>
        <StepperLayout>
          {confirmed ? (
            <ThankYou />
          ) : (
            <Suspense fallback={<StepperContentLoaderScreen />}>
              {STEPS[currentStep].component}
            </Suspense>
          )}
        </StepperLayout>
      </Container>
      <NextAndPrev className="mobile" />
    </ThemeProvider>
  );
}
