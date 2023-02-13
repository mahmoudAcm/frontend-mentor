import { Box, BoxProps, styled, Typography } from "@mui/material";

const PlanRoot = styled(Box)(({ theme }) => ({
  width: 134.9,
  minHeight: 160,
  border: "1px solid #ccc",
  borderRadius: theme.shape.borderRadius / 2,
  backgroundColor: "white",
  padding: "19.5px 15px",
  paddingBottom: 13,
  display: "flex",
  flexDirection: "column",
  userSelect: "none",
  cursor: "pointer",
  transition: "0.3s background-color, 0.2s border-color",
  "& .icon": {
    height: 80,
  },
  "&.active": {
    borderColor: "#5d56a0",
    backgroundColor: "#f8f9fe",
  },
  "&:hover": {
    borderColor: "#5d56a0",
  },
  [theme.breakpoints.down("sm")]: {
    alginItems: "center",
    width: "100%",
    flexDirection: "row",
    gap: 14,
    minHeight: 68,
    padding: 15,
    "& .icon": {
      height: 40,
    },
  },
}));

const Details = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  "& .price": {
    fontWeight: theme.typography.fontWeightMedium,
  },
  "& .offer": {
    fontSize: "0.73rem",
  },
  [theme.breakpoints.down("sm")]: {
    gap: 0,
    "& .price": {
      fontSize: "0.88rem",
      lineHeight: 1.5,
    },
    "& .offer": {
      fontSize: "0.76rem",
      lineHeight: 1.9,
    },
  },
}));

interface PlanProps extends BoxProps {
  icon: JSX.Element;
  type: "Arcade" | "Advanced" | "Pro" | "ANY";
  price: string;
  offer?: string;
}

export default function Plan(props: PlanProps) {
  const { icon, type, price, offer, ...rest } = props;
  return (
    <PlanRoot {...rest}>
      <span className="icon">{icon}</span>
      <Details>
        <Typography fontWeight={(theme) => theme.typography.fontWeightMedium}>
          {type}
        </Typography>
        <Typography variant="caption" color="#acadb2" className="price">
          {price}
        </Typography>
        {props.offer ? (
          <Typography className="offer">{props.offer}</Typography>
        ) : (
          <></>
        )}
      </Details>
    </PlanRoot>
  );
}
