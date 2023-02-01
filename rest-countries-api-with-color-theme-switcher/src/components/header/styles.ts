import DefaultAppBar from "@mui/material/AppBar";
import DefaultToolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";

export const AppBar = styled(DefaultAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  backgroundImage: "none",
  transitionProperty: "opacity",
  boxShadow:
    theme.palette.mode == "light"
      ? "0px 3px 3px -2px rgb(255 255 255 / 20%), 0px 3px 4px 0px rgb(255 255 255 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
      : "0px 3px 3px -2px #1e2b35, 0px 3px 4px 0px #1e2b35, 0px 1px 8px 0px rgb(0 0 0 / 12%)",
}));

export const Toolbar = styled(DefaultToolbar)(({ theme }) => ({
  justifyContent: "space-between",
  [theme.breakpoints.up("lg")]: {
    minHeight: 80,
    paddingLeft: "80px",
    paddingRight: "80px",
  },
  [theme.breakpoints.down("lg")]: {
    minHeight: 80,
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiTypography-root": {
      fontSize: 14,
    },
    "& button": {
      fontSize: 11.648,
    },
  },
}));

export const ToggleButton = styled(Button)(({ theme }) => ({
  fontSize: 15.68,
  fontWeight: 600,
  textTransform: "none",
  color: theme.palette.mode == "light" ? "black" : "white",
  marginRight: -5,
  transition: "0.2s background-color !important",
  "& svg": {
    marginTop: 2,
    width: 20,
    "& path": {
      strokeWidth: theme.palette.mode == "light" ? 1.3 : 0.5,
      stroke: theme.palette.mode == "light" ? "black" : "white",
    },
    [theme.breakpoints.down("md")]: {
      width: 19,
    },
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.dark, 0.3),
  },
}));
