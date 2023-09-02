import { useEffect, useState } from "react";

//components
import {
  Section,
  Counteries,
  StyledSnackbar,
  EndOfPageSection,
} from "./styles";
import { Container, Typography, Button } from "@mui/material";
import Filters, { FilterState } from "./filters";
import Country from "./country";
import { ErrorWrapper } from "styles";

//hooks
import { useCountries, useFetchNextPage } from "./hooks";
import usePreventScrolling from "@common/hooks/usePreventScrolling";

//data
import { fakeData } from "./hooks";

interface HomeProps {
  filters: FilterState;
}

export default function Home(props: HomeProps) {
  const [tryAgain, setTryAgain] = useState(false);
  const [filters, setFilters] = useState(props.filters);
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

  useEffect(() => {
    document.documentElement.style.setProperty("--font-size", "14px");
  }, []);

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
          initialState={props.filters}
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
