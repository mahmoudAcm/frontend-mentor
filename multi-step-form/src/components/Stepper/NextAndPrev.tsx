import { Box, Button, styled, colors, BoxProps } from "@mui/material";

const NextAndPrevRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  "& button": {
    borderRadius: theme.shape.borderRadius / 2,
    textTransform: "capitalize",
  },
  "& .goBack": {
    color: colors.grey[500],
    padding: 0,
    minWidth: 0,
  },
  "& .goNext": {
    padding: "11px 26px",
    fontSize: "0.96rem",
  },
  "& .confirm": {
    padding: "11px 32px",
    fontSize: "0.96rem",
  },
  "&.mobile": {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    "&.desktop": {
      display: "none",
    },
    "&.mobile": {
      display: "flex",
      padding: "15px 16px",
      backgroundColor: "white",
      "& button": {
        fontSize: "0.88rem",
      },
      "& .goNext": {
        padding: "8px 16px",
      },
      "& .confirm": {
        padding: "8px 22px",
      },
    },
  },
}));

interface NextAndPrevProps extends BoxProps {}

export default function NextAndPrev(props: NextAndPrevProps) {
  return (
    <NextAndPrevRoot {...props}>
      {/* <Button className="goBack" size="large">
        Go Back
      </Button>
      <Button variant="contained" className="goNext">
        Next Step
      </Button> */}
      <Box sx={{ flex: 1 }}></Box>
      <Button variant="contained" color="secondary" className="confirm">
        Confirm
      </Button>
    </NextAndPrevRoot>
  );
}
