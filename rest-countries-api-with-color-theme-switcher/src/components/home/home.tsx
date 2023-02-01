import { useEffect, useState } from "react";

//components
import {
  Section,
  Counteries,
  StyledSnackbar,
  ErrorWrapper,
  EndOfPageSection,
} from "./styles";
import { Container, Typography, Button } from "@mui/material";
import Filters from "./filters";
import Country from "./country";

//hooks
import { useCountries, useFetchNextPage, usePreventScrolling } from "./hooks";

//data
import { fakeData } from "./hooks";

export default function Home() {
  const [tryAgain, setTryAgain] = useState(false);
  const [filters, setFilters] = useState({ name: "", region: "" });
  const {
    data,
    isLoading,
    isFetchingNextPage,
    isFetched,
    hasNextPage,
    error,
    fetchNextPage,
  } = useCountries(filters, tryAgain);

  const { ref, inView } = useFetchNextPage(hasNextPage, fetchNextPage);

  const loading = isLoading || isFetchingNextPage || (hasNextPage && inView);
  const isDataAvailable = Boolean(data?.pages[0].result.length);
  const currentOpenStateOfSanckbar = !loading && isFetched;

  const [open, setOpen] = useState(currentOpenStateOfSanckbar);

  //for showing the snakebar
  useEffect(() => {
    if (currentOpenStateOfSanckbar) {
      setOpen(true);
    }
  }, [currentOpenStateOfSanckbar]);

  const handleClose = () => {
    setOpen(false);
  };

  usePreventScrolling(() => Boolean(error));

  if (error) {
    return (
      <ErrorWrapper>
        <Typography variant="h5" fontWeight={600}>
          A communication error has occurred with the API
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            setTryAgain((prev) => !prev);
          }}
        >
          Retry
        </Button>
      </ErrorWrapper>
    );
  }

  return (
    <Section>
      <Container>
        <Filters
          onFilter={(value) => {
            setFilters(value);
          }}
          error={!isDataAvailable && !loading}
        />
        <Counteries>
          {/* a feedback to the user to inform him with a new loaded data */}
          <StyledSnackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={open && isDataAvailable}
            message={
              <Typography fontWeight={600} align="center">
                Scroll down new data are available!
              </Typography>
            }
            autoHideDuration={3000}
            onClose={handleClose}
          />

          {(data?.pages ?? []).map((page) =>
            page.result.map((country, idx) => (
              <Country key={idx} {...country} />
            ))
          )}

          {/* if loading new data then display a skeleton until the data is available */}
          {loading ? (
            <>
              {fakeData.map((_, idx) => (
                <Country key={"fake" + idx} {...fakeData[0]} />
              ))}
            </>
          ) : (
            <></>
          )}
        </Counteries>

        {isDataAvailable ? <EndOfPageSection ref={ref} /> : <></>}
      </Container>
    </Section>
  );
}
