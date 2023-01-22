import { AppBar, Toolbar, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Header = styled(AppBar)(() => ({}));

export const Container = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
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
  },
}));

export const Nav = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& button:not(.menu)": {
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
      display: "none",
    },
    "&:hover": {
      backgroundColor: "white",
      color: theme.palette.secondary.light,
      borderColor: theme.palette.secondary.light,
    },
  },
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  "& svg": {
    width: 27,
    fill: "#272b44",
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
  "&.desktop": {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
