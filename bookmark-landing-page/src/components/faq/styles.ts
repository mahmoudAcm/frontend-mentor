import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledFaq = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  paddingBottom: 153.33,
  [theme.breakpoints.down("sm")]: {
    paddingBottom: 122,
  },
}));

export const QuestionAndAnswer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 53,
  "& .MuiAccordion-root:nth-last-of-type(1)": {
    borderBottom: "1px solid #ccc",
  },
}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  width: 542.22,
  color: "#3c3b4b",
  "& .MuiAccordionSummary-root": {
    padding: "0px 22px 0px 0px",
  },
  "& .MuiAccordionSummary-content": {
    margin: "19px 0px",
  },
  "& svg": {
    width: 20,
    fill: theme.palette.primary.main,
  },
  [theme.breakpoints.down("sm")]: {
    width: 305,
    "& .MuiAccordionSummary-root": {
      padding: 0,
    },
    "& .MuiAccordionSummary-content ": {
      "& .MuiTypography-root": {
        ...theme.typography.caption,
        fontSize: "0.82rem",
      },
    },
  },
}));

export const StyledButton = styled(Button)(() => ({
  marginTop: 54.44,
  textTransform: "none",
  fontSize: "0.8rem",
  padding: "10px 25px",
}));
