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
    padding: "10px 33px",
    letterSpacing: "1px",
    marginLeft: 50,
    marginRight: -6,
    color: "#ffe6e1",
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
  },
  "&.desktop": {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
