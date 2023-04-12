import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledLanguagesAndTools = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 10,
  margin: 0,
  padding: 0,
  [theme.breakpoints.down("md")]: {
    borderTop: "1px solid #7e8786",
    flexWrap: "wrap",
    paddingTop: 15,
    marginTop: 13,
  },
}));
