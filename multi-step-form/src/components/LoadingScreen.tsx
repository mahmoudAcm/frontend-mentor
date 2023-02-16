import * as React from "react";
import { Box, Fade, CircularProgress } from "@mui/material";

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "max(100%, 250px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress disableShrink color="secondary" />
    </Box>
  );
}
