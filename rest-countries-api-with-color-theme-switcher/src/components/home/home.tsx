import { ReactNode } from "react";

//components
import {
  Section,
  FilterForm,
  Search,
  RegionSelect,
  MenuItem,
  Counteries,
} from "./styles";
import { Container, Input, InputAdornment, Typography } from "@mui/material";
import Country from "./country";

//icons
import SearchIcon from "../../icons/Search";
import DropDownIcon from "../../icons/DropDown";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function Home() {
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
          {new Array(10).fill(0).map((_, idx) => (
            <Country key={idx} />
          ))}
        </Counteries>
      </Container>
    </Section>
  );
}
