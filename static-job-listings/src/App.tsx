//utils
import { CssBaseline } from "@mui/material";

//components
import Layout from "./layout";
import JobListing from "./job-listing";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <JobListing />
      </Layout>
    </>
  );
}
