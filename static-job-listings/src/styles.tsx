import Box, { BoxProps } from "@mui/material/Box";
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

export const Tag = styled(function (props: BoxProps) {
  return (
    <Box {...props} component={props.component ?? "li"}>
      {props.children}
    </Box>
  );
})(() => ({
  color: "#5da5a3",
  padding: "5px 10px",
  listStyleType: "none",
  fontWeight: 700,
  fontSize: "1.1rem",
  borderRadius: 5,
  lineHeight: "18px",
  backgroundColor: "hsl(180, 52%, 96%)",
  cursor: "pointer",
  transition: "0.3s background-color, 0.3s color",
  display: "flex",
  placeItems: "center",
  "&:hover": {
    backgroundColor: "#5da5a3",
    color: "white",
  },
  userSelect: "none",
}));
