import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";

export const StyledItem = styled(Box)(({ theme }) => ({
  maxWidth: 1105,
  minHeight: 90,
  backgroundColor: "white",
  borderRadius: 5,
  borderLeft: "5px solid transparent",
  padding: 33,
  display: "flex",
  columnGap: 25,
  alignItems: "center",
  boxShadow: `0 23px 23px -22px ${alpha("#5da5a3", 0.6)}`,
  "&.active": {
    borderLeft: "5px solid #5da5a3",
  },
  "& .MuiAvatar-root": {
    width: 90,
    height: 90,
  },
  [theme.breakpoints.down("md")]: {
    padding: 20,
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
    "& .MuiAvatar-root": {
      width: 49,
      height: 49,
      position: "absolute",
      top: "calc(49px / -2)",
    },
  },
}));

export const JobDiscriptionFirstColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  "& h2": {
    margin: "5px 0",
    color: "#333c3b",
    fontWeight: 700,
    cursor: "pointer",
    transition: "0.2s color",
    width: "fit-content",
    "&:hover": {
      color: "#5da5a3",
    },
    [theme.breakpoints.down("md")]: {
      ...theme.typography.body2,
      fontWeight: 700,
      marginTop: 10,
    },
  },
  "& .last-row": {
    "--column-gap": "20px",
    display: "flex",
    columnGap: "var(--column-gap)",
    "& span": {
      color: "#7e8786",
      fontWeight: 500,
      fontSize: 17,
      display: "inline-flex",
      alignItems: "center",
    },
    "& span:nth-of-type(1)::after, & span:nth-of-type(2)::after": {
      content: '""',
      width: 4,
      height: 4,
      background: "#b8bab9",
      borderRadius: "50%",
      marginLeft: "var(--column-gap)",
    },
    [theme.breakpoints.down("md")]: {
      "--column-gap": "10px",
    },
  },
}));
