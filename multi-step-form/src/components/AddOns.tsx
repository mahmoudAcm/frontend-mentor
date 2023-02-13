import { Box, styled, Checkbox, Typography, BoxProps } from "@mui/material";

const AddOnsRoot = styled(Box)(({ theme }) => ({
  width: 449,
  minHeight: 81,
  display: "flex",
  alignItems: "center",
  gap: 13,
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 10,
  paddingRight: 23,
  borderRadius: theme.shape.borderRadius / 2,
  backgroundColor: "white",
  border: `1px solid #ccc`,
  transition: theme.transitions.create(["border-color"], {
    duration: 100,
  }),
  userSelect: "none",
  "&.active, &:hover": {
    borderColor: theme.palette.secondary.light,
  },
  "& .price": {
    fontSize: "0.9rem",
    color: theme.palette.secondary.light,
    marginTop: 1,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    paddingLeft: 5,
    paddingRight: 15,
    gap: 5,
    minHeight: 63,
    "& .price": {
      fontSize: "0.78rem",
      marginTop: 4,
    },
  },
}));

const TitleAndSubtitle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  "& .MuiTypography-root": {
    letterSpacing: 0.15,
  },
  "& .title": {
    fontWeight: theme.typography.fontWeightMedium,
  },
  [theme.breakpoints.down("sm")]: {
    "& .title": {
      fontSize: "0.86rem",
    },
    "& .subtitle": {
      fontSize: "0.74rem",
    },
  },
  [theme.breakpoints.down(325)]: {
    gap: 5,
    "& .title": {
      lineHeight: 1.1,
    },
  },
}));

interface AddOnsProps extends BoxProps {
  title: string;
  subtitle: string;
  price: string;
}

export default function AddOns(props: AddOnsProps) {
  const { title, subtitle, price, ...rest } = props;
  return (
    <AddOnsRoot {...rest}>
      <Checkbox
        color="secondary"
        sx={{
          height: "fit-content",
        }}
        checked={rest.className?.includes("active") ?? false}
      />
      <TitleAndSubtitle>
        <Typography className="title">{title}</Typography>
        <Typography className="subtitle" color="textSecondary" variant="body2">
          {subtitle}
        </Typography>
      </TitleAndSubtitle>
      <Typography className="price">{price}</Typography>
    </AddOnsRoot>
  );
}
