import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledLayout = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: "hsl(180, 52%, 96%)",
  "& .header": {
    height: 156,
    backgroundImage: "url(./images/bg-header-desktop.svg)",
    position: "relative",
    backgroundColor: "#5da5a4",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "url(./images/bg-header-mobile.svg)",
    },
  },
}));
