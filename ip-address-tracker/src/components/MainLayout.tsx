import { Box, Container, styled, useMediaQuery, useTheme } from "@mui/material";

interface MainLayoutProps {
  top?: JSX.Element;
  bottom?: JSX.Element;
}

const Top = styled(Box)(({ theme }) => ({
  height: 280,
  backgroundImage: "url(./images/pattern-bg-v2.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  [theme.breakpoints.down("sm")]: {
    height: 300,
    backgroundPosition: "53% top",
  },
}));

const TopContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 26,
}));

export default function MainLayout(props: MainLayoutProps) {
  const theme = useTheme();
  const md = useMediaQuery(() => theme.breakpoints.down("lg"));

  return (
    <>
      <Top>
        <TopContainer>{props.top}</TopContainer>
      </Top>
      <Box
        sx={{
          "& .leaflet-container": {
            zIndex: 0,
            height: "100%",
          },
          height: md ? "max(100vh, 600px)" : "max(415px, calc(100vh - 280px))",
        }}
      >
        {props.bottom}
      </Box>
    </>
  );
}
