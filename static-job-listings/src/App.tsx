//utils
import { CssBaseline } from "@mui/material";

//components
import Layout from "./layout";
import JobListing from "./job-listing";

//data
import data from "./data.json";

//contexts
import FilterProvider from "./filter/context";

export default function App() {
  return (
    <>
      <CssBaseline />
      <FilterProvider>
        <Layout>
          <JobListing jobs={data} />
        </Layout>
      </FilterProvider>
    </>
  );
}
