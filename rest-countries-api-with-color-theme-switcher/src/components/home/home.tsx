import { useEffect } from "react";
import "intersection-observer";
import { useInView } from "react-intersection-observer";

//components
import { Section, Counteries } from "./styles";
import { Container, Box } from "@mui/material";
import Filters from "./filters";
import Country from "./country";

//hooks
import useCountries, { fakeData } from "./useCountries";

export default function Home() {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useCountries();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "60px",
  });

  const loading = isLoading || isFetchingNextPage || (hasNextPage && inView);
  //fetch more pages
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <Section>
      <Container>
        <Filters />
        <Counteries>
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
