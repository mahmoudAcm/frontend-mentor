import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";

export const StyledButton = styled("button")(({ theme }) => ({
  width: "fit-content",
  height: "fit-content",
  outline: "none",
  border: "1px solid white",
  backgroundColor: "transparent",
  color: "white",
  padding: "10px 30px",
  borderRadius: 7,
  letterSpacing: "3px",
  lineHeight: 1.2,
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
  position: "absolute",
  bottom: 25,
  right: 25,
  [theme.breakpoints.down("md")]: {
    left: "50%",
    transform: "translateX(-50%)",
    bottom: 45,
  },
}));

export const StyledRules = styled(Box)(({ theme }) => ({
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100%",
  backgroundColor: alpha("hsl(237, 49%, 15%)", 0.6),
  zIndex: -1,
  "&.active": {
    zIndex: theme.zIndex.modal,
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Modal = styled(Box)(({ theme }) => ({
  width: 398,
  height: 415,
  backgroundColor: "white",
  borderRadius: 10,
  padding: "27px 31px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  "& .title": {
    fontSize: 32,
    fontWeight: 700,
    flex: 1,
    textTransform: "uppercase",
    color: "hsl(229, 25%, 31%)",
    height: "fit-content",
  },
  "& .close-icon": {
    marginTop: 13,
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    minHeight: "100%",
    borderRadius: 0,
    flexDirection: "column",
    alignItems: "center",
    "& .title": {
      flex: 0,
    },
    "& .rules-icon": {
      order: 1,
    },
    "& .close-icon": {
      order: 2,
    },
  },
}));
