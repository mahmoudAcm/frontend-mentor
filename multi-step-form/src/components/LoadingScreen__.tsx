import * as React from "react";
import { Box, Fade, LinearProgress } from "@mui/material";

function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%", position: "fixed", top: 0, left: 0, right: 0 }}>
      <Fade
        in={true}
        style={{
          transitionDelay: "800ms",
        }}
        unmountOnExit
      >
        <LinearProgress variant="determinate" value={progress} />
      </Fade>
    </Box>
  );
}

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 250,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinearDeterminate />
    </Box>
  );
}
