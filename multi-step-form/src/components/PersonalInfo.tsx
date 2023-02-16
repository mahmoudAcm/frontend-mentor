import { SteppterContentLayout, StepperTitleAndSubtitle } from "./Stepper";
import {
  Box,
  styled,
  InputBase,
  colors,
  FormControl,
  FormControlProps,
  Typography,
  InputBaseProps,
} from "@mui/material";
import { ChangeEvent, useEffect, useId, useRef, useState } from "react";
import useForm from "../hooks/useForm";
import * as yup from "yup";

type TextFieldProps = FormControlProps & {
  label: string;
  error: string;
  inputProps: InputBaseProps["inputProps"];
};

const TextField = styled(function (props: TextFieldProps) {
  const id = useId();
  const { inputProps, label, error, ...rest } = props;
  return (
    <FormControl {...rest}>
      <Typography
        htmlFor={id}
        component="label"
        variant="body2"
        sx={{
          width: Boolean(error) ? "auto" : "fit-content",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>{label}</span>
        <span className="error">{error}</span>
      </Typography>
      <InputBase
        inputProps={inputProps}
        sx={{
          "& input": {
            borderColor: Boolean(error) ? "red !important" : undefined,
          },
        }}
        id={id}
        autoCorrect="off"
        autoCapitalize="off"
        autoComplete="off"
      />
    </FormControl>
  );
})(({ theme }) => ({
  gap: 6,
  "& .error": {
    color: "red",
  },
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
      width: "100%",
    },
  },
  [theme.breakpoints.down("md")]: {
    gap: 3,
    "& input": {
      fontSize: "0.95rem",
      padding: "8px 15px",
      borderRadius: 4,
    },
    "& label": {
      fontSize: "0.76rem",
    },
  },
}));

export const InputWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 21,
  [theme.breakpoints.down("md")]: {
    gap: 13,
  },
}));

const personalDataSchema = yup.object({
  name: yup
    .string()
    .min(5, "Should be at least 5 characters")
    .max(20, "Can't be more than 20 characters")
    .trim("Can't start or end with a space")
    .required("This field is required"),
  email: yup
    .string()
    .email("It is not a valid email")
    .required("This field is required"),
  phone: yup
    .string()
    .min(10, "it should contain minimum 10 digits")
    .max(12, "it should contain maximum 12 digits")
    .matches(new RegExp("^[0-9]+$", "g"), "it should contain digits only")
    .required("This field is required"),
});

export default function PersonalInfo() {
  const {
    personalInfo,
    updatePersonalInfo,
    validatePersonalInfo,
    isValidating,
    setIsValidating,
  } = useForm();
  const [feedback, setFeedback] = useState<
    Partial<yup.InferType<typeof personalDataSchema>>
  >({});

  const handleChange =
    (field: string) => (evt: ChangeEvent<HTMLInputElement>) => {
      setIsValidating(true);
      updatePersonalInfo(field, evt.target.value);
    };

  useEffect(() => {
    if (isValidating) {
      const data = {
        name: personalInfo.name,
        email: personalInfo.email,
        phone: personalInfo.phone,
      };
      const isValid = personalDataSchema.isValidSync(data);
      validatePersonalInfo(isValid);
      personalDataSchema
        .validate(data, { abortEarly: false })
        .then(() => {
          setFeedback({});
        })
        .catch((error: any) => {
          const feedback: any = {};
          error.inner.forEach(({ path, errors }: any) => {
            feedback[path] = errors.slice(-1)[0];
          });
          setFeedback(feedback);
        })
        .finally(() => {
          setIsValidating(false);
        });
    }

    return () => {
      setIsValidating(false);
    };
  }, [isValidating]);

  return (
    <SteppterContentLayout>
      <StepperTitleAndSubtitle
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />
      <InputWrapper component="form">
        <TextField
          label="Name"
          error={feedback.name}
          inputProps={{
            placeholder: "e.g. Stephen King",
            value: personalInfo.name,
            onChange: handleChange("name"),
          }}
        />
        <TextField
          label="Email Address"
          error={feedback.email}
          inputProps={{
            placeholder: "e.g. stephenking@lorem.com",
            type: "email",
            value: personalInfo.email,
            onChange: handleChange("email"),
          }}
        />
        <TextField
          label="Phone Number"
          error={feedback.phone}
          inputProps={{
            type: "tel",
            placeholder: "e.g. +1 234 567 890",
            value: personalInfo.phone,
            onChange: handleChange("phone"),
          }}
        />
      </InputWrapper>
    </SteppterContentLayout>
  );
}
