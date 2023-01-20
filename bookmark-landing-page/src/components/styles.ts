import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledSectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: 77,
  "& .title": {
    fontWeight: 500,
    "--title-width": 100 / (1.76 * 18) + "vw",
    fontSize: "clamp(1.35rem, var(--title-width), 1.76rem)",
    textAlign: "center",
    color: "#232643",
    [theme.breakpoints.down("sm")]: {
      width: 305,
    },
  },
  "& .subtitle": {
    maxWidth: 537,
    marginTop: "19px",
    textAlign: "center",
    color: "#a4a6ab",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      fontSize: "0.85rem",
      width: 305,
    },
  },
}));
