import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledTitle = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  height: "fit-content",
  "& h3": {
    color: "#5da5a3",
    margin: " 0 18px 0 0",
    fontWeight: 700,
  },
  "& span": {
    color: "white",
    padding: "5px 9px 3px",
    fontWeight: 700,
    fontSize: "1.005rem",
    borderRadius: 15,
    lineHeight: "18px",
    marginRight: 10,
    "&.new": {
      backgroundColor: "#5da5a3",
    },
    "&.featured": {
      backgroundColor: "#333c3b",
    },
  },
}));
