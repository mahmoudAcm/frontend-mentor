import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledLanguages = styled(Box)(() => ({
  display: "flex",
  columnGap: 10,
  margin: 0,
  padding: 0,
}));

export const Language = styled(function (props: BoxProps) {
  return (
    <Box {...props} component="li">
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
}));
