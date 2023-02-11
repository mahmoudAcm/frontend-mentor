import { ReactNode } from "react";
import { Box, styled } from "@mui/material";

const StepperContentRoot = styled(Box)(() => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  paddingTop: 38.3,
  paddingBottom: 16,
  paddingLeft: 15.4,
}));

export default function StepperContent(props: { children?: ReactNode }) {
  return <StepperContentRoot>{props.children}</StepperContentRoot>;
}
