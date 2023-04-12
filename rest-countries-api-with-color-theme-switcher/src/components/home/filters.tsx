import { ReactNode, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";

//components
import { Input, InputAdornment, MenuItem, Typography } from "@mui/material";
import { FilterContainer, FilterForm, RegionSelect, Search } from "./styles";

//icons
import SearchIcon from "../../icons/Search";
import DropDownIcon from "../../icons/DropDown";

//hooks
import useLocalStorage from "@common/hooks/useLocalStorage";

const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

export type FilterState = {
  name: string;
  region: string;
};

interface FiltersProps {
  onFilter: (value: FilterState) => void;
  error?: boolean;
  initialState: FilterState;
}

export default function Filters(props: FiltersProps) {
  const theme = useTheme();
  const filteringTimes = useRef(0);
  const [filters, setFilters] = useLocalStorage(props.initialState, "filters");

  //firing onFilter function when filters changes
  useEffect(() => {
    if (filteringTimes.current >= 1) {
      props.onFilter(filters);
    }
  }, [filters]);

  const handleChange = (name: string) => (evt: any) => {
    setFilters((filters) => ({
      ...filters,
      [name]: evt.target.value as string,
    }));
    filteringTimes.current %= 10;
    filteringTimes.current += 1;
  };

  return (
    <FilterContainer>
      <FilterForm>
        <Search>
          <Input
            placeholder="Search for a country..."
            value={filters.name}
            onChange={handleChange("name")}
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
                backgroundColor: theme.palette.primary.main,
                backgroundImage: "none",
                marginTop: "4px",
                paddingTop: "5px",
                paddingLeft: 0,
              },
              "& .MuiMenuItem-root": {
                minHeight: 27,
                paddingLeft: "24px",
                [theme.breakpoints.down("md")]: {
                  fontSize: "0.86rem",
                  minHeight: 15,
                  padding: "3px 24px",
                },
              },
            },
          }}
          IconComponent={DropDownIcon}
          value={filters.region}
          onChange={(evt, child) => {
            handleChange("region")(evt);
          }}
        >
          {regions.map((region, idx) => (
            <MenuItem value={region === "All" ? "" : region} key={idx}>
              {region}
            </MenuItem>
          ))}
        </RegionSelect>
      </FilterForm>
      <Typography align="center" variant="h5" className="error">
        {props.error ? "There is no result for your search" : ""}
      </Typography>
    </FilterContainer>
  );
}
