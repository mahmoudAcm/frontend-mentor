import { Box, styled, Typography } from "@mui/material";

const StepperTitleAndSubtitleRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 9,
  "& .title": {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "2rem",
  },
  "& .subtitle": {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: "0.98rem",
  },
  [theme.breakpoints.down("md")]: {
    "& .title": {
      fontSize: "1.5rem",
    },
    "& .subtitle": {
      fontSize: "1rem",
    },
  },
}));

interface StepperTitleAndSubtitleProps {
  title: string;
  subtitle: string;
}

export default function StepperTitleAndSubtitle(
  props: StepperTitleAndSubtitleProps
) {
  return (
    <StepperTitleAndSubtitleRoot>
      <Typography variant="h4" className="title">
        {props.title}
      </Typography>
      <Typography color="textSecondary" className="subtitle">
        {props.subtitle}
      </Typography>
    </StepperTitleAndSubtitleRoot>
  );
}
