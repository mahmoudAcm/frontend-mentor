import { SteppterContentLayout, StepperTitleAndSubtitle } from "./Stepper";
import {
  Box,
  styled,
  InputBase,
  colors,
  FormControl,
  FormControlProps,
  Typography,
} from "@mui/material";
import { useId } from "react";

interface InputProps extends FormControlProps {
  placeholder: string;
  label: string;
  type?: "email" | "number" | "text" | "tel";
}

const Input = styled(function (props: InputProps) {
  const id = useId();
  const { placeholder, label, type, ...rest } = props;
  return (
    <FormControl {...rest}>
      <Typography
        htmlFor={id}
        component="label"
        variant="body2"
        sx={{ width: "fit-content" }}
      >
        {label}
      </Typography>
      <InputBase
        placeholder={placeholder}
        id={id}
        type={type}
        autoCorrect="off"
        autoCapitalize="off"
        autoComplete="off"
      />
    </FormControl>
  );
})(({ theme }) => ({
  gap: 6,
  "& input": {
    width: 418,
    border: "1px solid #ccc",
    borderRadius: theme.shape.borderRadius / 2,
    "& ::placeholder": {
      fontWeight: theme.typography.fontWeightBold,
      color: colors.grey[900],
    },
    "&:hover, &:focus": {
      borderColor: "#5d56a0",
    },
    padding: "12px 15px",
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down("lg")]: {
      width: "100%"
    }
  },
  [theme.breakpoints.down("md")]: {
    gap: 3,
    "& input": {
      fontSize: "0.95rem",
      padding: "8px 15px",
      borderRadius: 4
    },
   "& label": {
    fontSize: "0.76rem"
   } 
  }
}));

export const InputWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 21,
  [theme.breakpoints.down("md")]: {
    gap: 13
  }
}));

export default function PersonalInfo() {
  return (
    <SteppterContentLayout>
      <StepperTitleAndSubtitle
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />
      <InputWrapper>
        <Input placeholder="e.g. Stephen King" label="Name" />
        <Input
          placeholder="e.g. stephenking@lorem.com"
          label="Email Address"
          type="email"
        />
        <Input placeholder="e.g. +1 234 567 890" label="Phone Number" />
      </InputWrapper>
    </SteppterContentLayout>
  );
}
