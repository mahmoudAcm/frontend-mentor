import { useEffect } from "react";

//components
import { Backdrop, CircularProgress } from "@mui/material";

export default function Loader() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Backdrop open={true} sx={{ zIndex: (theme) => theme.zIndex.appBar * 3 }}>
      <CircularProgress />
    </Backdrop>
  );
}
