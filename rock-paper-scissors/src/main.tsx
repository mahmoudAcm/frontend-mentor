import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <App />
      </>
    </ThemeProvider>
  </React.StrictMode>
);
