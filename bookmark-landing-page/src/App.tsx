//utils
import { CssBaseline } from "@mui/material";

//components
import Header from "./components/header";
import Home from "./components/home";
import Download from "./components/download";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <>
      <CssBaseline />
      {/* <Header /> */}
      {/* <Home /> */}
      <Download />
      <Faq />
      <Contact />
      {/* <Box
        className="dev"
        sx={{
          position: "fixed",
          inset: 0,
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(30px, 1fr))",
          gridTemplateRows: "repeat(12, minmax(30px, 1fr))",
          gap: "135px",
        }}
      ></Box> */}
    </>
  );
}
