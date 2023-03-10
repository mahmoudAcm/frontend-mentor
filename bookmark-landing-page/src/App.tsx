//utils
import { CssBaseline } from "@mui/material";

//components
import Header from "./components/header";
import Home from "./components/home";
import Features from "./components/features";
import Download from "./components/download";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Home />
      <Features />
      <Download />
      <Faq />
      <Contact />
      <Footer />
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
