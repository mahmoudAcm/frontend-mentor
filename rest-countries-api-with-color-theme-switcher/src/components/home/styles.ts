import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import DefaultMenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";

export const Section = styled(Box)(({ theme }) => ({
  "& .MuiContainer-root": {
    paddingTop: 49,
  },
  [theme.breakpoints.up("lg")]: {
    "& .MuiContainer-root": {
      maxWidth: "100%",
      paddingLeft: "80px",
      paddingRight: "80px",
    },
  },
}));

// filter styles
export const FilterForm = styled("form")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const Search = styled(FormControl)(({ theme }) => ({
  paddingLeft: 32,
  paddingRight: 32,
  backgroundColor: theme.palette.primary.main,
  borderRadius: 8,
  overflow: "hidden",
  "& .MuiInputBase-root::before": {
    display: "none",
  },
  "& svg": {
    width: 17,
    fill: theme.palette.mode == "light" ? "gray" : "white",
  },
  "& input": {
    padding: 18,
    width: 357,
    "&::after": {
      display: "none",
    },
    color: theme.palette.mode == "dark" ? "#fff" : "gray",
    fontWeight: 600,
  },
  boxShadow:
    theme.palette.mode == "light"
      ? "0px 3px 3px -2px rgb(255 255 255 / 20%), 0px 3px 4px 0px rgb(255 255 255 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
      : "none",
}));

export const RegionSelect = styled(Select)(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.primary.main,
  borderRadius: 4,
  marginBottom: 2,
  "&.Mui-Selected label": {
    color: "white",
  },
  "& .MuiSelect-select": {
    paddingLeft: 24,
    paddingRight: 24,
    color: theme.palette.mode == "light" ? "black" : "white",
    fontWeight: 600,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& svg": {
    width: 14,
    height: 14,
    right: 16,
    fill: theme.palette.mode == "light" ? "black" : "white",
  },
  boxShadow:
    theme.palette.mode == "light"
      ? "0px 3px 3px -2px rgb(255 255 255 / 20%), 0px 3px 4px 0px rgb(255 255 255 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
      : "none",
}));

export const MenuItem = styled(DefaultMenuItem)(({ theme }) => ({
  padding: "4px 24px",
  color: theme.palette.mode == "light" ? "black" : "white",
  fontWeight: 600,
}));

//cards styles
export const Counteries = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 264px)",
  justifyContent: "space-between",
  rowGap: 72,
  marginTop: 48,
  marginBottom: 48,
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-around",
    rowGap: 72,
  },
}));

export const StyledCountry = styled(Box)(({ theme }) => ({
  width: 264,
  height: 335,
  borderRadius: 6,
  backgroundColor: theme.palette.primary.main,
  boxShadow:
    theme.palette.mode == "light"
      ? "0px 3px 3px -2px rgb(255 255 255 / 20%), 0px 3px 4px 0px rgb(255 255 255 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
      : "none",
  overflow: "hidden",
}));

export const CountryImage = styled(Box)(() => ({
  width: "100%",
  height: 160,
  backgroundImage: "url('./us.svg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));

export const CountryContent = styled(Box)(() => ({
  padding: "24px 25px",
}));

export const CountryDetails = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 3,
  marginTop: 18,
  "& .MuiTypography-root": {
    fontWeight: 600,
    "& span": {
      color: theme.palette.mode == "light" ? "#3a3a3a" : "#ccc",
      fontWeight: 300,
    },
  },
}));
