import Box, { BoxProps } from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

export const Section = styled(Box)(({ theme }) => ({
  "& .MuiContainer-root": {
    paddingTop: 49,
  },
  [theme.breakpoints.up("lg")]: {
    "& .MuiContainer-root": {
      maxWidth: "100%",
      paddingLeft: "80px",
      paddingRight: "80px",
    },
  },
}));

export const ErrorWrapper = styled(function Wrapper({
  children,
  ...props
}: BoxProps) {
  return (
    <Section {...props}>
      <Container>
        <Box className="error">{children}</Box>
      </Container>
    </Section>
  );
})(() => ({
  "& .error": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 15,
    marginTop: "25vh",
  },
  "& .MuiTypography-root": {
    fontSize: "clamp(0.92rem, 2vw, 1.5rem)",
    userSelect: "none",
  },
  "& button": {
    textTransform: "capitalize",
    paddingLeft: 30,
    paddingRight: 30,
    fontWeight: 600,
    transition: "0s background-color !important",
  },
}));
