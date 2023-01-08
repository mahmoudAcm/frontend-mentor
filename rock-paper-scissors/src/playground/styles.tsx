import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledPlayground = styled(Box)(({ theme }) => ({
  minHeight: 650,
  "& .inner": {
    position: "relative",
    width: 313,
    display: "flex",
    justifyContent: "center",
    marginTop: 180,
    [theme.breakpoints.down("md")]: {
      marginTop: 90,
    },
  },
  "& .Paper": {
    left: -67,
    top: -75,
  },
  "& .Scissors": {
    right: -67,
    top: -75,
  },
  "& .Rock": {
    bottom: -28,
    left: 65,
  },
  [theme.breakpoints.down("md")]: {
    "--circle-radius": "140px",
    "--border-width": "18px",
    "& svg": {
      width: 180,
      "& path": {
        strokeWidth: 28,
      },
    },
    "& .Paper": {
      top: -14,
      left: -11,
    },
    "& .Scissors": {
      top: -14,
      right: -11,
    },
    "& .Rock": {
      left: 87,
      bottom: -5,
    },
  },
}));

export const StyledStepTwoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const StyledStepTwo = styled(Box)(({ theme }) => ({
  display: "flex",
  columnGap: 50,
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    marginTop: 90,
  },
  "& h3": {
    color: "white",
    letterSpacing: 2,
    fontSize: 25,
    textShadow: "0 2px hsl(237, 49%, 15%)",
    position: "relative",
    zIndex: 5,
    [theme.breakpoints.down("md")]: {
      fontSize: 15,
    },
  },
  "& .container": {
    "--circle-radius": "250px",
    "--border-width": "28px",
    [theme.breakpoints.down("md")]: {
      "--circle-radius": "140px",
      "--border-width": "18px",
      flexDirection: "column-reverse",
      rowGap: 15,
    },
    maxWidth: "calc(1.1 * (var(--circle-radius) + var(--border-width)))",
    height: "calc(1.5 * (var(--circle-radius) + var(--border-width)))",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 30,
  },
  "& .circle": {
    position: "relative",
    width: "var(--circle-radius)",
    height: "var(--circle-radius)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "calc(var(--circle-radius) - var(--border-width) * 2)",
      height: "calc(var(--circle-radius) - var(--border-width) * 2)",
      borderRadius: "50%",
      backgroundImage: "linear-gradient(150deg, #18234152, #182341)",
      marginTop: 5,
    },
    "& .item": {
      inset: 0,
    },
    "& .lvl1": {
      position: "absolute",
      width: "calc(var(--circle-radius) + 4.2 * var(--border-width))",
      height: "calc(var(--circle-radius) + 4.2 * var(--border-width))",
      backgroundImage: "radial-gradient(#23365617,#2b385894 10%)",
      borderRadius: "50%",
      zIndex: 2,
    },
    "& .lvl2": {
      position: "absolute",
      width: "calc(var(--circle-radius) + 8.5 * var(--border-width))",
      height: "calc(var(--circle-radius) + 8.5 * var(--border-width))",
      backgroundImage: "radial-gradient(#23365617,#2b385894)",
      borderRadius: "50%",
      zIndex: 1,
    },
    "& .lvl3": {
      position: "absolute",
      width: "calc(var(--circle-radius) + 13.5 * var(--border-width))",
      height: "calc(var(--circle-radius) + 13.5 * var(--border-width))",
      backgroundImage: "radial-gradient(#23365600,#2b385894)",
      borderRadius: "50%",
      zIndex: 0,
    },
  },
}));

export const StyledResult = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  alignItems: "center",
  marginTop: 57,
  position: "relative",
  zIndex: 5,
  rowGap: 30,
  "& span": {
    fontSize: 60,
    lineHeight: "50px",
    color: "white",
    textShadow: "0 2px hsl(237, 49%, 15%)",
  },
  "& button": {
    outline: "none",
    border: "none",
    padding: "18px 62px",
    letterSpacing: 3,
    borderRadius: 10,
    textTransform: "uppercase",
    fontWeight: 600,
    color: "hsl(229, 25%, 31%)",
    cursor: "pointer",
    transition: "0.3s color",
    "&:hover": {
      color: "red",
    },
    boxShadow: "0 1.5px 0 hsl(237, 49%, 15%)",
  },
}));
