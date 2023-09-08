import { useEffect, useRef, useState } from "react";
import { Box, Fade, LinearProgress } from "@mui/material";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const timer = useRef<any>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 5 + 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    const ready = document?.fonts?.ready;
    if (ready) {
      ready.then(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      clearInterval(timer.current);
    }
  }, [progress]);

  return (
    <Fade in={loading || progress !== 100} appear={false} unmountOnExit>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "fixed",
          inset: 0,
          zIndex: (theme) => theme.zIndex.appBar * 2,
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Fade>
  );
}
