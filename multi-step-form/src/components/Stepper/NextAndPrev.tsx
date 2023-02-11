import { Box, Button, styled, colors } from "@mui/material";

const NextAndPrevRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  "& button": {
    borderRadius: theme.shape.borderRadius / 2,
    textTransform: "capitalize"
  },
  "& .goBack": {
    color: colors.grey[500],
    padding: 0,
  },
  "& .goNext": {
    padding: "11px 26px",
    fontSize: "0.96rem"
  }
}));

export default function NextAndPrev() {
  return (
    <NextAndPrevRoot>
      <Button className="goBack" size="large">Go Back</Button>
      <Button variant="contained" className="goNext">Next Step</Button>
    </NextAndPrevRoot>
  );
}
