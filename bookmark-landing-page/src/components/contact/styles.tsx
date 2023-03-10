import { InputHTMLAttributes } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const StyledContact = styled("section")(({ theme }) => ({
  height: 360,
  backgroundColor: theme.palette.primary.main,
  "& .MuiContainer-root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  "& .row:nth-last-of-type(1)": {
    display: "flex",
    gap: 19,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  letterSpacing: "5px",
  fontSize: "clamp(0.3rem, 7.9365vw, 0.68rem)",
  fontWeight: 500,
  lineHeight: 1.5,
  [theme.breakpoints.down("sm")]: {
    letterSpacing: "4px",
  },
}));

export const Content = styled(Typography)(({ theme }) => ({
  width: 461,
  fontSize: "clamp(1.32rem, 3.12vw, 1.78rem)",
  fontWeight: 500,
  lineHeight: 1.2,
  marginTop: 38,
  marginBottom: 38,
  [theme.breakpoints.down("sm")]: {
    width: 305,
    marginTop: 10,
    marginBottom: 30,
  },
}));

export const Form = styled("form")(({ theme }) => ({
  "&:invalid": {
    "& .inputWrapper": {
      backgroundColor: theme.palette.secondary.main,
      "& input": {
        paddingRight: 45,
      },
      "& .MuiTypography-root": {
        display: "flex",
      },
      "& svg": {
        display: "flex",
      },
    },
  },
}));

export const InputWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: 3,
  padding: 3,
  position: "relative",
  "& .MuiTypography-root": {
    display: "none",
    fontSize: "0.6rem",
    fontStyle: "italic",
    fontWeight: 500,
    marginLeft: 10,
    marginTop: 3,
  },
  "& svg": {
    position: "absolute",
    display: "none",
    right: 17,
    top: 14,
  },
}));

export const Input = styled(function ({
  children,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Box {...props} component="input">
      {children}
    </Box>
  );
})(({ theme }) => ({
  width: 300,
  outline: "none",
  padding: "12px 15px",
  borderRadius: 4,
  border: "none",
  fontFamily: "inherit",
  fontSize: "0.858rem",
  "&::placeholder": {
    color: "#ccc",
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: 310,
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: "0.8rem",
  padding: "8px 23px 7px",
  height: "fit-content",
  marginTop: 2,
  border: "2px solid transparent",
  "&:hover": {
    backgroundColor: "white",
    color: theme.palette.secondary.light,
    borderColor: theme.palette.secondary.light,
  },
}));
