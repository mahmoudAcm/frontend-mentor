import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  paddingBottom: "12vh",
  position: "relative",
  [theme.breakpoints.down("lg")]: {
    paddingTop: 74,
  },
  "& .background": {
    position: "absolute",
    width: "max(43%, 510px)",
    height: 350,
    left: 0,
    opacity: 0,
    top: 425,
    zIndex: -1,
    borderBottomRightRadius: 200,
    borderTopRightRadius: "100%",
    backgroundColor: theme.palette.primary.main,
    "&.show": {
      opacity: 1,
    },
    [theme.breakpoints.down("lg")]: {
      width: "max(70%, 300px)",
      top: "auto",
      bottom: 275,
      borderBottomRightRadius: 105,
    },
    [theme.breakpoints.down("sm")]: {
      height: 200,
      top: 603,
      bottom: "auto",
    },
  },
}));

export const FeaturesTabs = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  overflow: "hidden",
}));

export const AntTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: "1px solid #e8e8e8",
  marginTop: 45,
  "& .MuiTabs-indicator": {
    height: 4,
  },
  [theme.breakpoints.down("md")]: {
    width: "90%",
    borderBottom: "none",
    "& .MuiTabs-flexContainer": {
      flexDirection: "column",
      borderTop: "1px solid #e8e8e8",
      alignItems: "center",
    },
    "& .MuiTabs-indicator": {
      height: 0,
    },
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  width: 240,
  textTransform: "capitalize",
  fontWeight: 400,
  paddingTop: 28,
  paddingBottom: 28,
  letterSpacing: 0.7,
  transition: "0.2s color",
  "&.Mui-selected": {
    color: "#2d2d37",
  },
  "&:hover": {
    color: theme.palette.secondary.light,
  },
  "&::after": {
    transition: "3s background-color",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    maxWidth: "100%",
    paddingTop: 18,
    paddingBottom: 18,
    borderBottom: "1px solid #e8e8e8",
    position: "relative",
    "&.Mui-selected::after": {
      position: "absolute",
      content: '" "',
      width: 142,
      height: 4,
      backgroundColor: theme.palette.secondary.main,
      bottom: 0,
    },
  },
}));

export const Panels = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "fit-content",
}));

export const StyledPanel = styled(Box)(({ theme }) => ({
  minHeight: 450,
  rowGap: 36,
  columnGap: 125,
  marginTop: 70,
  display: "flex",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const LeftSide = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%",
  "& .image-wrapper": {
    width: 537,
    minHeight: 200,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    "& .image-wrapper": {
      width: 311,
      justifyContent: "center",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& img": {
      width: "min(100%, 311px)",
    },
  },
}));

export const RightSide = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  width: "fit-content",
  marginTop: 35,
  textTransform: "none",
  fontSize: "0.8rem",
  padding: "10px 25px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
