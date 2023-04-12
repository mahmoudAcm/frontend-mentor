import { Box, BoxProps, styled } from "@mui/material";
import NextAndPrev from "./NextAndPrev";

const SteppterContentLayoutRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  "& .container": {
    display: "flex",
    flexDirection: "column",
    gap: 35,
    flex: 1,
    [theme.breakpoints.down("md")]: {
      gap: 21,
    },
  },
}));

export default function SteppterContentLayout(props: BoxProps) {
  const { children, ...rest } = props;
  return (
    <SteppterContentLayoutRoot {...rest}>
      <div className="container">{children}</div>
      <NextAndPrev className="desktop" />
    </SteppterContentLayoutRoot>
  );
}
