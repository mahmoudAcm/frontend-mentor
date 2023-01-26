import { ReactNode, useEffect } from "react";
import "intersection-observer";
import { useInView } from "react-intersection-observer";

//components
import {
  Section,
  FilterForm,
  Search,
  RegionSelect,
  MenuItem,
  Counteries,
} from "./styles";
import { Container, Input, InputAdornment, Box } from "@mui/material";
import Country from "./country";

//icons
import SearchIcon from "../../icons/Search";
import DropDownIcon from "../../icons/DropDown";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

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
        <FilterForm>
          <Search>
            <Input
              placeholder="Search for a country..."
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Search>
          <RegionSelect
            displayEmpty
            renderValue={(selected) => {
              if (!selected) {
                return <>Filter by Region</>;
              }
              return (<>{selected}</>) as ReactNode;
            }}
            inputProps={{ "aria-label": "Without label" }}
            MenuProps={{
              sx: {
                "& .MuiPaper-root": {
                  backgroundColor: (theme) => theme.palette.primary.main,
                  backgroundImage: "none",
                  marginTop: "4px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                },
              },
            }}
            IconComponent={DropDownIcon}
          >
            {regions.map((region, idx) => (
              <MenuItem value={region} key={idx}>
                {region}
              </MenuItem>
            ))}
          </RegionSelect>
        </FilterForm>
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
