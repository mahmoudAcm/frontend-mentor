import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  lineHeight: 1.4,
  minHeight: "100vh",
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
  "& h3": {
    fontSize: "clamp(1.7rem, 40vh, 2.65rem)",
  },
  "& p": {
    maxWidth: 490,
    fontSize: "1.02rem",
  },
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    marginTop: 70,
  },
  [theme.breakpoints.down("md")]: {
    "& h3": {
      fontSize: "1.7rem",
      width: 305,
    },
    "& p": {
      fontSize: "0.85rem",
      width: 305,
    },
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
