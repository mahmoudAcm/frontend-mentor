import {
  Box,
  CssBaseline,
  InputBase,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import Comp from "./comp";
import MainLayout from "./components/MainLayout";
import MapLocation from "./components/MapLocation";
import ArrowIcon from "./icons/Arrow";

const Title = styled(Typography)(({ theme }) => ({
  paddingTop: 31,
  [theme.breakpoints.down("sm")]: {
    paddingTop: 27,
    fontSize: "1.6rem",
  },
}));

const FormControl = styled("form")(({ theme }) => ({
  display: "flex",
  borderRadius: theme.shape.borderRadius * 4,
  overflow: "hidden",
  height: 58,
  [theme.breakpoints.down("sm")]: {
    width: "96%",
    marginTop: 2,
  },
}));

const Input = styled(InputBase)(({ theme }) => ({
  width: 497,
  fontSize: "1.125rem",
  padding: "28px 25px",
  background: "white",
  "&:hover": {
    color: "#2b2b2b",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const InputAddorment = styled(Box)(({ theme }) => ({
  width: 58,
  background: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: theme.transitions.create(["background"], {
    duration: 250,
  }),
  "&:hover": {
    background: "#3f3f3f",
  },
  [theme.breakpoints.down("sm")]: {
    width: 75,
  },
}));

const Panel = styled(Paper)(({ theme }) => ({
  width: "96.3%",
  minHeight: 160,
  marginTop: 22,
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 65,
  justifyContent: "center",
  borderRadius: theme.shape.borderRadius * 4,
  padding: "32px 32px",
  position: "relative",
  zIndex: 10,
  [theme.breakpoints.down("lg")]: { 
    gridTemplateColumns: "auto",
    width: "80%",
    marginTop: -2,
    paddingTop: 23,
    paddingBottom: 23,
    gap: 19,
  },
  [theme.breakpoints.down("md")]: {
    width: "95.4%",
  },
}));

const Info = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 9,
  "& .title": {
    textTransform: "uppercase",
    fontSize: "0.92rem",
    color: "#969696",
    letterSpacing: 0.23,
    userSelect: "none",
  },
  "& .text": {
    width: 190,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: "1.6rem",
    color: "#282828",
    lineHeight: 1.2,
  },
  "&::after": {
    position: "absolute",
    content: '" "',
    width: 1,
    // background: "red",
    background: "#e4e4e4",
    marginLeft: -33,
    height: 75,
    marginTop: 10,
  },
  "&:nth-of-type(1)::after": {
    display: "none",
  },
  [theme.breakpoints.down("lg")]: {
    alignItems: "center",
    gap: 5,
    "& .title": {
      fontSize: "0.75rem",
    },
    "& .text": {
      width: "auto",
      fontSize: "1.24rem",
    },
    "&::after": {
      display: "none",
    },
  },
}));

export default function App() {
  return (
    <>
      <CssBaseline />
      <MainLayout
        top={
          <>
            <Title
              fontWeight={(theme) => theme.typography.fontWeightMedium}
              variant="h1"
              color="white"
              fontSize="1.97rem"
            >
              IP Address Tracker
            </Title>
            <FormControl>
              <Input
                placeholder="Search for any IP address or domain"
                value="192.212.174.101"
              />
              <InputAddorment>
                <ArrowIcon />
              </InputAddorment>
            </FormControl>
            <Panel elevation={6}>
              <Info>
                <Typography className="title" variant="h6">
                  ip address
                </Typography>
                <Typography className="text">192.212.174.101</Typography>
              </Info>
              <Info>
                <Typography className="title" variant="h6">
                  location
                </Typography>
                <Typography className="text">Brooklyn, NY 10001</Typography>
              </Info>
              <Info>
                <Typography className="title" variant="h6">
                  timezone
                </Typography>
                <Typography className="text">UTC -05:00</Typography>
              </Info>
              <Info>
                <Typography className="title" variant="h6">
                  isp
                </Typography>
                <Typography className="text">SpaceX Starlink</Typography>
              </Info>
            </Panel>
          </>
        }
        bottom={<MapLocation />}
      />
      {/* <Comp /> */}
    </>
  );
}
