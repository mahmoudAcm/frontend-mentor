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
  }
}));

export default function NextAndPrev() {
  return (
    <NextAndPrevRoot>
      <Button className="goBack" size="large">Go Back</Button>
      <Button variant="contained" size="large">Next Step</Button>
    </NextAndPrevRoot>
  );
}
