import { styled } from "@mui/material/styles";

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
