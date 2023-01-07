import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledItem = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: 308,
  cursor: "pointer",
  "& ._1": {
    width: 155,
    height: 155,
    backgroundColor: "#b9bed4",
    borderRadius: "50%",
    top: -15,
    zIndex: 1,
    position: "absolute",
  },
  "& ._2": {
    width: 155,
    height: 155,
    backgroundColor: "#e0e0e0",
    borderRadius: "50%",
    position: "absolute",
    zIndex: 3,
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      width: 69,
      height: 79,
      marginTop: -17,
    },
  },
  "&::before": {
    content: "''",
    width: 208,
    height: 208,
    borderRadius: "50%",
    position: "absolute",
    zIndex: 4,
    top: -40,
    left: -27,
  },
  "&::after": {
    content: "''",
    width: 208,
    height: 208,
    borderRadius: "50%",
    position: "absolute",
    zIndex: 0,
    top: -30,
    left: -27,
  },
  [theme.breakpoints.down("md")]: {
    width: 99,
    "& img": {
      width: "48px !important",
      height: "58px !important",
    },
    "& ._1, & ._2": {
      width: 120,
      height: 120,
      left: -10,
    },
    "& ._1": {
      top: -30,
    },
    "& ._2": {
      top: -17,
    },
    "&::after": {
      top: -35,
    },
    "&::after, &::before": {
      width: 152,
      height: 152,
    },
    "&::before": {
      borderWidth: "16px !important",
    },
  },
}));
