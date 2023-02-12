import { Box, BoxProps, styled, Typography } from "@mui/material";

const StepperSidbarRoot = styled(Box)(() => ({
  width: 274,
  height: 568,
  backgroundImage: "url('/assets/images/bg-sidebar-desktop.svg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  textTransform: "uppercase",
  padding: "37px 31px",
  display: "flex",
  flexDirection: "column",
  gap: 28.5,
}));

const Step = styled(function Step(props: BoxProps) {
  const { id, ...rest } = props;
  return (
    <Box {...rest}>
      <Box className="circle">{id}</Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="caption" color="#9b9aff">
          Step {id}
        </Typography>
        <Typography
          variant="body2"
          color="white"
          fontWeight={(theme) => theme.typography.fontWeightBold}
          sx={{ letterSpacing: "0.8px", lineHeight: 1.2 }}
        >
          {props.children}
        </Typography>
      </Box>
    </Box>
  );
})(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 18,
  "& .circle": {
    width: 33,
    height: 33,
    borderRadius: "50%",
    border: "1px solid white",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&.active": {
    "& .circle": {
      backgroundColor: "#c0e4ff",
      borderColor: "#c0e4ff",
      color: "#0a2b59",
    },
  },
}));

const STEPS = ["your info", "select plan", "add-ons", "summary"];

export default function StepperSidbar() {
  return (
    <StepperSidbarRoot>
      {STEPS.map((step, idx) => (
        <Step id={idx + 1 + ""} className={idx == 2 ? "active" : undefined}>
          {step}
        </Step>
      ))}
    </StepperSidbarRoot>
  );
}
