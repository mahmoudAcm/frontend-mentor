import { Paper, styled } from "@mui/material";
import StepperSidbar from "./StepperSidebar";

const StepperLayoutRoot = styled(Paper)(() => ({
  width: 938,
  height: 598,
  padding: 14.9,
}));

export default function StepperLayout() {
  return (
    <StepperLayoutRoot elevation={10}>
      <StepperSidbar />
    </StepperLayoutRoot>
  );
}
