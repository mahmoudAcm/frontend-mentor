import { AppBar, Toolbar, IconButton, Box, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

export const Header = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  "&.open": {
    [theme.breakpoints.down("md")]: {
      inset: 0,
      position: "fixed",
      zIndex: theme.zIndex.appBar,
      backgroundColor: alpha("#2f354f", 0.96),
    },
  },
}));

export const Container = styled(Toolbar)(({ theme }) => ({
  "& .col": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("lg")]: {
    minHeight: 137.55,
    paddingLeft: 171,
    paddingRight: 171,
  },
  [theme.breakpoints.between("md", "lg")]: {
    minHeight: 105,
    paddingLeft: 32,
    paddingRight: 32,
  },
  [theme.breakpoints.down("md")]: {
    minHeight: 105,
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: "column",
    "& .col": {
      padding: "38px 0",
    },
  },
}));

export const Nav = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    "&.open": {
      display: "flex",
    },
  },
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  padding: "8px 31px",
  letterSpacing: "1px",
  marginLeft: 48,
  marginRight: -6,
  color: "#ffe6e1",
  border: "2px solid " + theme.palette.secondary.main,
  "&, &:hover": {
    boxShadow: "0px 3px 4px -1px #ccc",
  },
  "& .MuiTypography-root": {
    fontWeight: 500,
    fontSize: "0.72rem",
  },
  [theme.breakpoints.down("md")]: {
    "&, &:hover": {
      margin: "25px 0",
      boxShadow: "none",
      width: "100%",
      backgroundColor: "transparent !important",
      borderColor: "white",
      color: "white",
      "& .MuiTypography-root": {
        fontWeight: 500,
        fontSize: "1rem",
        letterSpacing: "1.8px",
      },
    },
  },
  "&:hover": {
    backgroundColor: "white",
    color: theme.palette.secondary.light,
    borderColor: theme.palette.secondary.light,
  },
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: -5,
  "& .open-icon": {
    width: 27,
    height: 27,
    fill: "#272b44",
  },
  "& .close-icon": {
    width: 16,
    height: 16,
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const List = styled("ul")(({ theme }) => ({
  padding: 0,
  margin: 0,
  display: "flex",
  listStyleType: "none",
  gap: 45,
  "& li": {
    fontSize: "0.741rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#757784",
    fontWeight: 500,
    cursor: "pointer",
    transition: "0.3s color",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    flexDirection: "column",
    gap: 0,
    "& li": {
      padding: "14px 0",
      textAlign: "center",
      borderTop: "1px solid #4c526c",
      fontSize: "1.18rem",
      fontWeight: 400,
      color: "white",
      letterSpacing: "1.8px",
      "&:nth-last-of-type(1)": {
        borderBottom: "1px solid #4c526c",
      },
    },
  },
}));

export const Links = styled(Box)(({ theme }) => ({
  display: "none",
  gap: 40,
  alignItems: "center",
  "& svg": {
    cursor: "pointer",
    "& path": {
      transition: "0.2s fill",
    },
    "&:hover": {
      "& path": {
        fill: theme.palette.secondary.light,
      },
    },
  },
  "&.open": {
    display: "flex",
    marginBottom: 42,
  },
}));
