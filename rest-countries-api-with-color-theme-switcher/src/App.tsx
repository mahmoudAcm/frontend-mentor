//utils
import { CssBaseline } from "@mui/material";

//layouts
import MainLayout from "./components/layouts/main";

//components
import Home from "./components/home";

export default function App() {
  return (
    <>
      <CssBaseline />
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
}
