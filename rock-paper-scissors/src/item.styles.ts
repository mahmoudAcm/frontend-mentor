import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ItemWrapper = styled(Box)(() => ({
  position: "absolute",
  width: "var(--circle-radius)",
  height: "var(--circle-radius)",
  borderRadius: "50%",
  zIndex: 199,
}));

export const StyledItem = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 6,
  width: "var(--circle-radius)",
  height: "var(--circle-radius)",
  borderRadius: "50%",
  backgroundColor: "#bac0ce",
  borderWidth: "var(--border-width)",
  borderStyle: "solid",
  zIndex: 200,
  overflow: "hidden",
  cursor: "pointer",
  "& ._1": {
    position: "absolute",
    width: "calc(var(--circle-radius) - 30px)",
    height: "calc(var(--circle-radius) - 30px)",
    borderRadius: "50%",
    backgroundColor: "#dedede",
    zIndex: 100,
    left: "calc(-1 * var(--border-width) + 15px)",
    top: "calc(0.38 * var(--border-width))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      marginBottom: "var(--border-width)",
      width: "calc(2.5 * var(--border-width))",
    },
  },
}));
