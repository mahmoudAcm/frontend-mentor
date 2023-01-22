import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  lineHeight: 1.4,
  minHeight: "calc(100vh - 137.55px)",
  position: "relative",
  "& .background": {
    position: "absolute",
    width: 530,
    height: 350,
    right: 0,
    top: 195,
    zIndex: -1,
    borderBottomLeftRadius: 200,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      width: 275,
      top: 85,
      height: 180,
      borderBottomLeftRadius: 105,
    },
  },
  [theme.breakpoints.down("lg")]: {
    minHeight: "calc(100vh - 105px)",
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  paddingLeft: 165,
  display: "flex",
  columnGap: 70,
  margin: "auto",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "32px !important",
    paddingRight: "32px !important",
    display: "flex",
    flexDirection: "column-reverse",
  },
}));

export const FirstHalf = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  marginTop: 136,
  rowGap: 25,
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    marginTop: 70,
  },
}));

export const Butttons = styled(Box)(({ theme }) => ({
  display: "flex",
  columnGap: 25.55,
  "& button": {
    textTransform: "none",
    fontSize: ".8rem",
    paddingLeft: theme.spacing(3.1),
    paddingRight: theme.spacing(3.1),
    paddingTop: theme.spacing(1.4),
    paddingBottom: theme.spacing(1.2),
    marginTop: 5,
    border: "2px solid transparent",
    "&, &:hover": {
      boxShadow: "0px 3px 4px -1px #ccc",
    },
    "&:nth-of-type(2)": {
      backgroundColor: "#f7f7f5",
      color: "#575860",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.603rem",
    },
    "&:hover": {
      "&:nth-of-type(1)": {
        borderColor: theme.palette.primary.main,
        backgroundColor: "white",
        color: theme.palette.primary.main,
      },
      "&:nth-of-type(2)": {
        color: "#5f5f6c",
        borderColor: "#5f5f6c",
      },
    },
  },
}));

export const SecondHalf = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "flex-end",
    width: "100%",
  },
}));

export const Image = styled("img")(({ theme }) => ({
  marginTop: 55,
  marginLeft: -110,
  [theme.breakpoints.down("sm")]: {
    width: 315,
    height: 225,
    margin: "33px -30px 0 0",
  },
}));
