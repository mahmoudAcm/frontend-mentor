import { ReactNode } from "react";
import { Paper, styled } from "@mui/material";
import StepperContent from "./StepperContent";
import StepperSidbar from "./StepperSidebar";

const StepperLayoutRoot = styled(Paper)(({ theme }) => ({
  width: 938,
  height: 598,
  padding: 14.9,
  display: "flex",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "fit-content",
    marginTop: -73,
  },
}));

export default function StepperLayout(props: { children?: ReactNode }) {
  return (
    <StepperLayoutRoot elevation={10}>
      <StepperSidbar />
      <StepperContent>{props.children}</StepperContent>
    </StepperLayoutRoot>
  );
}
