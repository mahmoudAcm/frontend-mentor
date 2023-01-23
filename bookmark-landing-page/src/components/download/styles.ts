import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

export const Section = styled("section")(() => ({
  width: "100%",
  minHeight: "100vh",
  paddingBottom: "10vh",
}));

export const Browsers = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 32,
  "--margin-top": "48px",
  "--factor": 2,
  marginTop: 70,
  [theme.breakpoints.down("md")]: {
    "--factor": 0.5,
    "--margin-top": "24px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    "--factor": 1,
    "--margin-top": "48px",
  },
}));

export const StyledCard = styled(Box)(() => ({
  width: 280,
  height: 355,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  borderRadius: 7,
  boxShadow: "0 7px 10px 1px #ebedfa",
  "& img": {
    userSelect: "none",
  },
}));

export const Image = styled(Avatar)(() => ({
  minWidth: 102,
  height: "fit-content",
  marginBottom: 31,
}));

export const CardContent = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  flex: 1,
  padding: 25,
  "& .MuiTypography-body1": {
    fontSize: "1.08rem",
    letterSpacing: "0.5px",
  },
  "& .MuiTypography-subtitle2": {
    marginTop: 7,
    fontSize: "0.80rem",
    letterSpacing: "0.5px",
  },
}));

export const CardFooter = styled(Box)(() => ({
  padding: 25,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none !important",
  fontSize: "0.78rem",
  padding: "14px 6px",
  lineHeight: 1.1,
  border: "2px solid transparent",
  "&:hover": {
    backgroundColor: "white",
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
}));
