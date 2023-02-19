import { Box, Container } from "@mui/material";

interface MainLayoutProps {
  top?: JSX.Element;
  bottom?: JSX.Element;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Box
        sx={{
          height: 280,
          background: "url('./images/pattern-bg.png')",
          backgroundSize: "cover"
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "26px"
          }}
        >
          {props.top}
        </Container>
      </Box>
      <Box>{props.bottom}</Box>
    </>
  );
}
