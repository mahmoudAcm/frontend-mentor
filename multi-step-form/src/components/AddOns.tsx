import { Box, styled, Checkbox, Typography, BoxProps } from "@mui/material";

const AddOnsRoot = styled(Box)(({ theme }) => ({
  width: 449,
  minHeight: 81,
  display: "flex",
  alignItems: "center",
  gap: 13,
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
}));

const TitleAndSubtitle = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  "& .MuiTypography-root": {
    letterSpacing: 0.15,
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
        <Typography fontWeight={(theme) => theme.typography.fontWeightMedium}>
          {title}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {subtitle}
        </Typography>
      </TitleAndSubtitle>
      <Typography
        fontSize="0.9rem"
        sx={{ color: (theme) => theme.palette.secondary.light, marginTop: 1 }}
      >
        {price}
      </Typography>
    </AddOnsRoot>
  );
}
