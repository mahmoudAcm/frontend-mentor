import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  position: "relative",
  "&:nth-of-type(odd)": {
    "& .background": {
      justifyContent: "flex-end",
      "& .elem": {
        width: 502,
        borderBottomLeftRadius: 170,
      },
    },
  },
  "&:nth-of-type(even)": {
    "& .elem": {
      width: 630,
      borderBottomRightRadius: 170,
    },
  },
}));

export const Background = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& .elem": {
    height: 350,
    backgroundColor: theme.palette.primary.main,
  },
}));
