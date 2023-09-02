import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledMain = styled(Box)(({ theme }) => ({
  marginTop: 80,
  [theme.breakpoints.down("md")]: {
    marginTop: 55,
  },
}));
