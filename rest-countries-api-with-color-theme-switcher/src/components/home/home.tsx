import { useEffect, useState } from "react";
import "intersection-observer";
import { useInView } from "react-intersection-observer";

//components
import { Section, Counteries, StyledSnackbar, ErrorWrapper } from "./styles";
import { Container, Box, Typography, Button } from "@mui/material";
import Filters from "./filters";
import Country from "./country";

//hooks
import useCountries, { fakeData } from "./useCountries";

function usePreventScrolling(hideScrollWhen: () => boolean) {
  useEffect(() => {
    if (hideScrollWhen()) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hideScrollWhen]);
}

export default function Home() {
  const [tryAgain, setTryAgain] = useState(false);
  const {
    data,
    isLoading,
    isFetchingNextPage,
    isFetched,
    hasNextPage,
    error,
    fetchNextPage,
  } = useCountries(["name", String(tryAgain)]);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "60px",
  });

  const loading = isLoading || isFetchingNextPage || (hasNextPage && inView);
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

  //fetch more pages
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

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
        <Filters />
        <Counteries>
          {/* a feedback to the user to inform him with a new loaded data */}
          <StyledSnackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={open && Boolean(data?.pages?.length)}
            message={
              <Typography fontWeight={600} align="center">
                Scroll down new data are available!
              </Typography>
            }
            autoHideDuration={3000}
            onClose={handleClose}
          />

          {data?.pages.map((page) =>
            page.result.map((country, idx) => (
              <Country key={idx} {...country} />
            ))
          )}

          {/* if loading new data then display a skeleton until the data is available */}
          {loading ? (
            fakeData.map((fake, idx) => (
              <Country key={"fake" + idx} {...fake} />
            ))
          ) : (
            <></>
          )}
        </Counteries>

        {/* for detecting when we reach the end of the page it is used as a target for the intersection observer */}
        <Box
          ref={ref}
          sx={{
            height: 1,
            width: "100%",
          }}
        />
      </Container>
    </Section>
  );
}
