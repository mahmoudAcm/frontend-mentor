import { Box, Paper, Skeleton, styled, Typography } from "@mui/material";
import { IPAdressResult } from "../types";

const Panel = styled(Paper)(({ theme }) => ({
  width: "96.3%",
  minHeight: 160,
  marginTop: 22,
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 65,
  boxShadow:
    "0 8px 9px -14px rgb(222 211 211 / 20%), 0px 15px 22px 2px rgb(224 216 216 / 14%), 0px 6px 28px 5px rgb(4 4 4 / 12%)",
  justifyContent: "center",
  borderRadius: theme.shape.borderRadius * 4,
  padding: 32,
  position: "relative",
  zIndex: 10,
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "auto",
    width: 497 + 58,
    marginTop: -2,
    padding: "50px 125px",
    gap: 19,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "23px 32px",
    width: "95.4%",
  },
}));

const Info = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 9,
  "& .title": {
    textTransform: "uppercase",
    fontSize: "0.92rem",
    color: "#969696",
    letterSpacing: 0.23,
    userSelect: "none",
  },
  "& .text": {
    width: 190,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: "1.6rem",
    color: "#282828",
    lineHeight: 1.2,
  },
  "&::after": {
    position: "absolute",
    content: '" "',
    width: 1,
    // background: "red",
    background: "#e4e4e4",
    marginLeft: -33,
    height: 75,
    marginTop: 10,
  },
  "&:nth-of-type(1)::after": {
    display: "none",
  },
  [theme.breakpoints.down("lg")]: {
    alignItems: "center",
    gap: 5,
    "& .title": {
      fontSize: "0.75rem",
    },
    "& .text": {
      width: "auto",
      fontSize: "1.24rem",
    },
    "&::after": {
      display: "none",
    },
  },
}));

type Result = Omit<IPAdressResult, "location"> & IPAdressResult["location"];

export interface IPDomainPanelProps extends Result {
  loading?: boolean;
}

export default function IPDomainPanel(props: IPDomainPanelProps) {
  return (
    <Panel>
      <Info>
        <Typography className="title" variant="h6">
          ip address
        </Typography>
        {props.loading ? (
          <Skeleton width="100%" />
        ) : (
          <Typography className="text">{props.ip}</Typography>
        )}
      </Info>
      <Info>
        <Typography className="title" variant="h6">
          location
        </Typography>
        {props.loading ? (
          <Skeleton width="100%" />
        ) : (
          <Typography className="text">
            {props.city
              ? `${props.city}, ${props.region} ${props.postalCode}`
              : ""}
          </Typography>
        )}
      </Info>
      <Info>
        <Typography className="title" variant="h6">
          timezone
        </Typography>
        {props.loading ? (
          <Skeleton width="100%" />
        ) : (
          <Typography className="text">
            {props.timezone ? "UTC " + props.timezone : ""}
          </Typography>
        )}
      </Info>
      <Info>
        <Typography className="title" variant="h6">
          isp
        </Typography>
        {props.loading ? (
          <Skeleton width="100%" />
        ) : (
          <Typography className="text">{props.isp}</Typography>
        )}
      </Info>
    </Panel>
  );
}
