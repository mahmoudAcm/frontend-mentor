import { SteppterContentLayout } from "./Stepper";
import ThankYouIcon from "../icons/ThankYou";
import { Box, styled, Typography } from "@mui/material";

const ThankYouRoot = styled(SteppterContentLayout)(({ theme }) => ({
  "& .container": {
    alignItems: "center",
    marginTop: 126.5,
    gap: 31,
  },
  "& .title": {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "2rem",
  },
  [theme.breakpoints.only("sm")]: {
    "& .container": {
      marginTop: 0,
      paddingTop: 48,
      paddingBottom: 43,
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .container": {
      marginTop: 0,
      gap: 24,
    },
    "& svg": {
      width: 55,
      height: 55,
    },
  },
}));

const Content = styled(Box)(({ theme }) => ({
  width: 450,
  display: "flex",
  flexDirection: "column",
  gap: "13px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    gap: 10,
    "& .title": {
      fontSize: "1.5rem",
    },
  },
}));

export default function ThankYou() {
  return (
    <ThankYouRoot>
      <ThankYouIcon sx={{ width: 80, height: 80 }} />
      <Content>
        <Typography variant="h4" className="title">
          Thank you!
        </Typography>
        <Typography color="gray" align="center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </Typography>
      </Content>
    </ThankYouRoot>
  );
}
