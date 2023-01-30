import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import DefaultMenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { BoxProps } from "@mui/system";

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
export const FilterForm = styled("form")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    rowGap: 40,
  },
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
    [theme.breakpoints.down("md")]: {
      width: 14,
    },
  },
  "& input": {
    padding: 18,
    width: 357,
    "&::after": {
      display: "none",
    },
    color: theme.palette.mode == "dark" ? "#fff" : "gray",
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      padding: "13px 14px 14px 18px",
      "&::placeholder": {
        fontSize: "0.85rem",
      },
    },
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
  [theme.breakpoints.down("md")]: {
    "& .MuiSelect-select": {
      fontSize: "0.8rem",
      paddingTop: 13,
      paddingBottom: 13,
    },
    "& svg": {
      width: 10,
      right: 20,
    },
  },
}));

export const MenuItem = styled(DefaultMenuItem)(({ theme }) => ({
  padding: "4px 24px",
  color: theme.palette.mode == "light" ? "black" : "white",
  fontWeight: 600,
}));

export const StyledSnackbar = styled(Snackbar)(() => ({
  width: 270,
  margin: "auto",
  "& .MuiSnackbarContent-message": {
    width: "100%",
  },
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

export const CountryFlag = styled(Box)(() => ({
  width: "100%",
  height: 160,
  backgroundImage: "url('./us.svg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  cursor: "pointer",
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
//end of cards styles

export const ErrorWrapper = styled(function Wrapper({
  children,
  ...props
}: BoxProps) {
  return (
    <Section {...props}>
      <Container>
        <Box className="error">{children}</Box>
      </Container>
    </Section>
  );
})(() => ({
  "& .error": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 15,
    marginTop: "25vh",
  },
  "& .MuiTypography-root": {
    fontSize: "clamp(0.92rem, 2vw, 1.5rem)",
    userSelect: "none",
  },
  "& button": {
    textTransform: "capitalize",
    paddingLeft: 30,
    paddingRight: 30,
    fontWeight: 600,
    transition: "0s background-color !important",
  },
}));
