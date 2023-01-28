import { useNavigate } from "react-router-dom";

//components
import { Typography, Skeleton } from "@mui/material";
import {
  StyledCountry,
  CountryContent,
  CountryImage,
  CountryDetails,
} from "./styles";

//types
import { Country as CountryType } from "types";

interface CountryProps extends CountryType {
  isLoading?: boolean;
}

export default function Country(props: CountryProps) {
  const navigate = useNavigate();

  return (
    <StyledCountry
      onClick={() => {
        if (!props.isLoading) {
          navigate("/countries/" + props.name.common);
        }
      }}
    >
      {props.isLoading ? (
        <Skeleton height={160} variant="rectangular" />
      ) : (
        <CountryImage sx={{ backgroundImage: `url('${props.flags.svg}')` }} />
      )}
      <CountryContent>
        {props.isLoading ? (
          <Skeleton width={120} />
        ) : (
          <Typography fontSize="1.26rem" fontWeight={800} variant="h3">
            {props.name.common}
          </Typography>
        )}
        <CountryDetails>
          {props.isLoading ? (
            <>
              <Skeleton width={200} />
              <Skeleton width={200} />
              <Skeleton width={200} />
            </>
          ) : (
            <>
              <Typography>
                Population: <span>{props.population}</span>
              </Typography>
              <Typography>
                Region: <span>{props.region}</span>
              </Typography>
              <Typography>
                Capital:
                <span> {props.capital ? props.capital.join(", ") : ""}</span>
              </Typography>
            </>
          )}
        </CountryDetails>
      </CountryContent>
    </StyledCountry>
  );
}
