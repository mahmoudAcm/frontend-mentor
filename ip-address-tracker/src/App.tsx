import {
  Alert,
  Box,
  CssBaseline,
  Stack,
  styled,
  Typography,
} from "@mui/material";
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
  const [errors, setErrors] = useState<string[]>([]);
  const [result, setResult] = useState(resultData);

  const handleClose = (id: number) => () => {
    setErrors((errors) => errors.filter((_, idx) => idx !== id));
  };

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
                  errors.push("Their is no search result.");
                } finally {
                  setLoading(false);
                  setErrors(errors);
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
      <Stack
        direction="column"
        sx={{
          position: "fixed",
          right: 10,
          bottom: 10,
          zIndex: (theme) => theme.zIndex.snackbar,
        }}
        spacing={1}
      >
        {errors.map((error, idx) => (
          <Alert
            severity="error"
            key={error}
            onClose={handleClose(idx)}
            sx={{ minWidth: 300 }}
          >
            {error}
          </Alert>
        ))}
      </Stack>
    </>
  );
}
