import { Box, styled, Typography } from "@mui/material";

const StepperTitleAndSubtitleRoot = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 7,
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
      <Typography
        variant="h4"
        fontWeight={(theme) => theme.typography.fontWeightBold}
        fontSize="2rem"
      >
        {props.title}
      </Typography>
      <Typography
        color="textSecondary"
        fontWeight={(theme) => theme.typography.fontWeightMedium}
        fontSize="0.98rem"
      >
        {props.subtitle}
      </Typography>
    </StepperTitleAndSubtitleRoot>
  );
}
