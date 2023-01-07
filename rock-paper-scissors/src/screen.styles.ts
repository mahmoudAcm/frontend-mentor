import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledScreen = styled(Box)(({ theme }) => ({
  width: 698,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "2px solid hsl(217, 16%, 45%)",
  borderRadius: 10,
  marginTop: 44,
  padding: "24px 25px",
  "& img": {
    width: 157,
    height: 97,
  },
  "& .score": {
    width: 150,
    height: 100,
    backgroundColor: "white",
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 12,
    "& .text": {
      color: "hsl(229, 64%, 46%)",
      fontSize: 16,
      letterSpacing: "3px",
      lineHeight: 1,
      fontWeight: 600,
    },
    "& .value": {
      fontWeight: 700,
      fontSize: 55,
      lineHeight: 0.76,
      color: "hsl(229, 25%, 31%)",
    },
    [theme.breakpoints.down("md")]: {
      width: 90,
      height: 85,
      rowGap: 5,
      "& .text": {
        fontSize: 10,
        letterSpacing: "2px",
      },
      "& .value": {
        fontSize: 42,
        lineHeight: 0.9,
      },
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "89%",
    padding: "18px 20px !important",
    "& img": {
      width: 80,
      height: 65,
    },
  },
}));
