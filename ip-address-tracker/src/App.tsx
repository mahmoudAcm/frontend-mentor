import { CssBaseline, styled, Typography } from "@mui/material";
import { useState } from "react";
import IPDomainForm from "./components/IPDomainForm";
import IPDomainPanel from "./components/IPDomainPanel";
import MainLayout from "./components/MainLayout";
import Map from "./components/Map";
import { getData } from "./helpers/fetch";
import { IPAdressResult } from "./types";
import resultData from "./__fakeApi__/result";

const Title = styled(Typography)(({ theme }) => ({
  paddingTop: 31,
  [theme.breakpoints.down("sm")]: {
    paddingTop: 27,
    fontSize: "1.6rem",
  },
}));

export default function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(resultData);

  return (
    <>
      <CssBaseline />
      <MainLayout
        top={
          <>
            <Title
              fontWeight={(theme) => theme.typography.fontWeightMedium}
              variant="h1"
              color="white"
              fontSize="1.97rem"
            >
              IP Address Tracker
            </Title>
            <IPDomainForm
              onSubmit={async (value, errors) => {
                try {
                  setLoading(true);
                  if (!errors.length) {
                    const result = await getData<IPAdressResult>(
                      `https://geo.ipify.org/api/v2/country,city?apiKey=at_L5gEFmEECTT3eEuugQPWxwZRcWfK5&domain=${value}&ipAddress=${value}`
                    );
                    setResult({
                      ip: result.ip,
                      isp: result.isp,
                      ...result.location,
                    });
                  }
                } catch (e) {
                } finally {
                  setLoading(false);
                  console.log(value, errors);
                }
              }}
            />
            <IPDomainPanel {...result} loading={loading} />
          </>
        }
        bottom={
          <Map
            position={[result?.lat ?? 40.6501, result?.lng ?? -73.94958]}
            popup={`${result?.city}, ${result?.region} ${result?.postalCode}`}
          />
        }
      />
      {/* <Comp /> */}
    </>
  );
}
