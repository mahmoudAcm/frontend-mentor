import { ReactNode } from "react";
import { Box, styled } from "@mui/material";

const StepperContentRoot = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  paddingTop: 38.3,
  paddingBottom: 16,
  paddingLeft: 15.4,
  [theme.breakpoints.down("md")]: {
    paddingTop: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
}));

export default function StepperContent(props: { children?: ReactNode }) {
  return <StepperContentRoot>{props.children}</StepperContentRoot>;
}
