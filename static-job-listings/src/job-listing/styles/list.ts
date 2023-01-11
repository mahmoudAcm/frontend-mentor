import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledList = styled(Box)(({ theme }) => ({
  marginTop: "calc(75px + var(--offset) / 2)",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  rowGap: 22,
  paddingBottom: 110,
  [theme.breakpoints.down("md")]: {
    marginTop: "calc(56px + var(--offset))",
    rowGap: 44,
  },
}));
