//components
import { Typography } from "@mui/material";
import {
  StyledCountry,
  CountryContent,
  CountryImage,
  CountryDetails,
} from "./styles";

export default function Country() {
  return (
    <StyledCountry>
      <CountryImage />
      <CountryContent>
        <Typography fontSize="1.26rem" fontWeight={800} variant="h3">
          United States of America
        </Typography>
        <CountryDetails>
          <Typography>
            Population: <span>323,947,000</span>
          </Typography>
          <Typography>
            Region: <span>Americas</span>
          </Typography>
          <Typography>
            Capital: <span>Washington, D.C.</span>
          </Typography>
        </CountryDetails>
      </CountryContent>
    </StyledCountry>
  );
}
