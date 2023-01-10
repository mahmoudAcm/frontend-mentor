import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledList = styled(Box)(({ theme }) => ({
  marginTop: 75,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  rowGap: 22,
  [theme.breakpoints.down("md")]: {
    marginTop: 56,
    rowGap: 44
  }
}));
