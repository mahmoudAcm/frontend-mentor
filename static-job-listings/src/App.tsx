//hooks
import { useEffect, useState } from "react";

//utils
import { CssBaseline } from "@mui/material";

//components
import Layout from "./layout";
import JobListing from "./job-listing";
import { LoadingScreen } from "./styles";

//data
import data from "./data.json";

//contexts
import FilterProvider from "./filter/context";

export default function App() {
  const isLoading = useLoader();
  return (
    <>
      <CssBaseline />
      <FilterProvider>
        <Layout>
          <JobListing jobs={data} />
        </Layout>
      </FilterProvider>
      <LoadingScreen className={!isLoading ? "fade" : ""} />
    </>
  );
}

function useLoader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const onLoad = () => {
      document.fonts.ready.then(() => {
        setLoading(false);
      });
    };
    onLoad();
    window.addEventListener("load", onLoad);
    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);
  return loading;
}
