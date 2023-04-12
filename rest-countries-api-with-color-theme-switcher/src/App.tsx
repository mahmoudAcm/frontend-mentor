import { RouterProvider } from "react-router-dom";

//utils
import { CssBaseline } from "@mui/material";

//routers
import router from "./routes";

export default function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}
