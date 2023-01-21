import { Box, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: "#242946",
  [theme.breakpoints.down("md")]: {
    paddingTop: 40,
    paddingBottom: 40,
  },
}));

export const Container = styled(Toolbar)(({ theme }) => ({
  minHeight: "88px !important",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 171,
    paddingRight: 171,
  },
  [theme.breakpoints.between("md", "lg")]: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const Nav = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flex: 1,
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
  },
}));

export const List = styled("ul")(({ theme }) => ({
  padding: 0,
  margin: 0,
  display: "flex",
  listStyleType: "none",
  gap: 45,
  marginLeft: 66,
  "& li": {
    fontSize: "0.741rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#dee3f2",
    fontWeight: 500,
    cursor: "pointer",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    margin: "43px 0",
    textAlign: "center",
    gap: 35,
  },
}));

export const Links = styled(Box)(() => ({
  display: "flex",
  gap: 40,
  "& img": {
    cursor: "pointer",
  },
}));
