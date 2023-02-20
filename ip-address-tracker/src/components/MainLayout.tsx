import { Box, Container, styled } from "@mui/material";

interface MainLayoutProps {
  top?: JSX.Element;
  bottom?: JSX.Element;
}

const Top = styled(Box)(({ theme }) => ({
  height: 280,
  background: "url('./images/pattern-bg.png')",
  backgroundSize: "cover",
  [theme.breakpoints.down("sm")]: {
    height: 300,
  },
}));

const TopContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 26,
}));

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Top>
        <TopContainer>{props.top}</TopContainer>
      </Top>
      <Box>{props.bottom}</Box>
    </>
  );
}
