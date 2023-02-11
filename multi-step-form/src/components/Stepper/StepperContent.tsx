import { ReactNode } from "react";
import { Box, styled } from "@mui/material";

const StepperContentRoot = styled(Box)(() => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  paddingTop: 41,
  paddingBottom: 16,
  paddingLeft: 10,
}));

export default function StepperContent(props: { children?: ReactNode }) {
  return <StepperContentRoot>{props.children}</StepperContentRoot>;
}
