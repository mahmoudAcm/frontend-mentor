import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { styled, alpha } from "@mui/material/styles";

export const Section = styled(Box)(({ theme }) => ({
  "& .MuiContainer-root": {
    paddingTop: 80,
  },
  [theme.breakpoints.up("lg")]: {
    "& .MuiContainer-root": {
      maxWidth: "100%",
      paddingLeft: "80px",
      paddingRight: "80px",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiContainer-root": {
      paddingTop: 64,
      paddingLeft: "25px",
      paddingRight: "25px",
    },
  },
}));

export const BackButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: "0.9625rem",
  fontWeight: 600,
  padding: "7px 39px",
  "& svg": {
    width: 18,
    fill: theme.palette.mode == "light" ? "black" : "white",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.875rem",
    lineHeight: 1,
    padding: "8px 28px",
    "& svg": {
      width: 15,
    },
  },
}));

export const Details = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: 77.77,
  // columnGap: 144,
  marginBottom: 60,
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "space-around",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 70,
  },
}));

export const LeftSide = styled(Box)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    margin: "auto",
  },
}));

export const Flag = styled(Box)(({ theme }) => ({
  width: 560,
  height: 400,
  backgroundPosition: "top left",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  "&::before": {
    width: "calc(100% + 43px)",
    height: "calc(100% + 40px)",
    content: '""',
    position: "absolute",
    top: -20,
    left: -22.5,
    backgroundColor: alpha(theme.palette.primary.dark, 0.287),
    borderRadius: 10,
    zIndex: -1,
  },
  [theme.breakpoints.down("sm")]: {
    margin: "auto",
    maxWidth: "100%",
    minHeight: 190,
    maxHeight: 230,
    "&::before": {
      display: "none",
    },
  },
}));

export const FlagSkeleton = styled(Skeleton)(({ theme }) => ({
  width: 560,
  height: 400,
  [theme.breakpoints.down("sm")]: {
    margin: "auto",
    maxWidth: "100%",
    minHeight: 190,
    maxHeight: 230,
  },
}));

export const RightSideLoadingScreen = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "54vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiCircularProgress-root": {
    color: theme.palette.mode === "light" ? "black" : "white",
  },
}));

export const RightSide = styled(Box)(({ theme }) => ({
  width: "45%",
  display: "flex",
  flexDirection: "column",
  marginTop: 43,
  gap: 30,
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    "& .country--name": {
      fontSize: "1.3125rem",
    },
  },
}));

export const InfosContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  rowGap: 35,
}));

export const Infos = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 9,
  "& .row": {
    display: "flex",
    alignItems: "center",
  },
  [theme.breakpoints.between("sm", "lg")]: {
    width: "50%",
  },
}));

export const Info = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "0.9625rem",
  letterSpacing: 0.3,
  "& span": {
    fontWeight: 300,
    color: theme.palette.mode == "light" ? "#6e757b" : "#ccc",
    letterSpacing: 0.1,
  },
  [theme.breakpoints.down("lg")]: {
    flex: 1,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.875rem",
    fontWeight: 600,
  },
}));

export const Borders = styled(Info)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 15,
  fontSize: "0.9625rem !important",
  marginTop: "43px",
  "& .borders": {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },
  "& .badge": {
    flex: 1,
    minWidth: 90,
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    padding: "8px 13px",
    fontSize: "0.8645rem",
    lineHeight: 1,
    boxShadow: theme.shadows[2],
    cursor: "pointer",
    userSelect: "none",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
    "& .badge": {
      fontSize: "0.7rem",
    },
  },
}));
