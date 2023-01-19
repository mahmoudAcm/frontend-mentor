import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Header = styled(AppBar)(() => ({}));

export const Container = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    minHeight: 137.55,
    paddingLeft: 171,
    paddingRight: 171,
  },
}));

export const Nav = styled("nav")(() => ({
  display: "flex",
  alignItems: "center",
  "& ul": {
    padding: 0,
    margin: 0,
    display: "flex",
    listStyleType: "none",
    gap: 45,
  },
  "& li": {
    fontSize: "0.741rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#757784",
    fontWeight: 500,
  },
  "& button": {
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
  },
}));
