import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledItem = styled(Box)(() => ({
  maxWidth: 1105,
  minHeight: 90,
  backgroundColor: "white",
  borderRadius: 5,
  borderLeft: "5px solid #5da5a3",
  padding: 33,
  display: "flex",
  columnGap: 25,
  alignItems: "center",
  boxShadow: "0 23px 23px -19px #ccc",
  "& .MuiAvatar-root": {
    width: 90,
    height: 90,
  },
}));

export const JobDiscriptionFirstColumn = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  "& h2": {
    margin: "5px 0",
    color: "#333c3b",
    fontWeight: 700,
  },
  "& .last-row": {
    display: "flex",
    columnGap: 20,
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
      marginLeft: 20,
    },
  },
}));
