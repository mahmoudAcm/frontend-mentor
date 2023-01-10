//utils
import { CssBaseline } from "@mui/material";

//components
import Layout from "./layout";
import JobListing from "./job-listing";

//data
import data from "./data.json";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <JobListing jobs={data}/>
      </Layout>
    </>
  );
}
