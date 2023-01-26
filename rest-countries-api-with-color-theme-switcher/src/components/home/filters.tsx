import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";

//components
import { Input, InputAdornment, MenuItem } from "@mui/material";
import { FilterForm, RegionSelect, Search } from "./styles";

//icons
import SearchIcon from "../../icons/Search";
import DropDownIcon from "../../icons/DropDown";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function Filters() {
  const theme = useTheme();
  return (
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
      >
        {regions.map((region, idx) => (
          <MenuItem value={region} key={idx}>
            {region}
          </MenuItem>
        ))}
      </RegionSelect>
    </FilterForm>
  );
}
