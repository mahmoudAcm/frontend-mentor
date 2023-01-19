import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Section = styled("section")(() => ({
  width: "100%",
  minHeight: "100vh",
  display: "grid",
  gridTemplateColumns: "repeat(12, minmax(30px,1fr))",
  gap: 135,
  "& img": {
    gridColumnStart: 6,
    marginLeft: -94,
    marginTop: 55,
  },
}));

export const FirstHalf = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 136,
  rowGap: 25,
  gridColumn: "2 / 6",
  "& h3": {
    fontSize: "2.65rem",
    lineHeight: "2.9rem",
  },
  "& p": {
    fontSize: "1.02rem",
  },
}));

export const Butttons = styled(Box)(({ theme }) => ({
  display: "Flex",
  columnGap: 25.55,
  "& button": {
    textTransform: "none",
    fontSize: ".8rem",
    paddingLeft: theme.spacing(3.1),
    paddingRight: theme.spacing(3.1),
    paddingTop: theme.spacing(1.4),
    paddingBottom: theme.spacing(1.2),
    marginTop: 5,
    "&, &:hover": {
      boxShadow: "0px 3px 4px -1px #ccc",
    },
    "&:nth-of-type(2)": {
      backgroundColor: "#f7f7f5",
      color: "#575860",
    },
  },
}));
