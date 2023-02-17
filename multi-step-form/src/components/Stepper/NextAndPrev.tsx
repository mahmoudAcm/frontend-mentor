import { Box, Button, styled, colors, BoxProps } from "@mui/material";
import useForm from "../../hooks/useForm";

const NextAndPrevRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  "& button": {
    borderRadius: theme.shape.borderRadius / 2,
    textTransform: "capitalize",
  },
  "& .goBack": {
    color: colors.grey[500],
    padding: 0,
    minWidth: 0,
  },
  "& .goNext": {
    padding: "11px 26px",
    fontSize: "0.96rem",
  },
  "& .confirm": {
    padding: "11px 32px",
    fontSize: "0.96rem",
  },
  "&.mobile": {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    "&.desktop": {
      display: "none",
    },
    "&.mobile": {
      width: "100%",
      position: "fixed",
      bottom: 0,
      display: "flex",
      padding: "15px 16px",
      backgroundColor: "white",
      boxShadow: theme.shadows[20],
      "& button": {
        fontSize: "0.88rem",
      },
      "& .goNext": {
        padding: "8px 16px",
      },
      "& .confirm": {
        padding: "8px 22px",
      },
    },
  },
}));

interface NextAndPrevProps extends BoxProps {}

export default function NextAndPrev(props: NextAndPrevProps) {
  const {
    numOfSteps,
    currentStep,
    confirmed,
    goNext,
    goBack,
    confirm,
    isValidating,
    setIsValidating,
  } = useForm();
  if (confirmed) return <></>;
  return (
    <NextAndPrevRoot {...props}>
      {currentStep > 1 && currentStep < numOfSteps ? (
        <Button className="goBack" size="large" onClick={goBack}>
          Go Back
        </Button>
      ) : (
        <></>
      )}
      {currentStep < numOfSteps ? (
        <>
          <Box sx={{ flex: 1 }}></Box>
          <Button
            variant="contained"
            className="goNext"
            disabled={isValidating}
            onClick={() => {
              if (currentStep === 1) {
                setIsValidating(true);
              }
              goNext();
            }}
          >
            Next Step
          </Button>
        </>
      ) : (
        <></>
      )}
      {currentStep === numOfSteps ? (
        <>
          <Box sx={{ flex: 1 }}></Box>
          <Button
            variant="contained"
            color="secondary"
            className="confirm"
            onClick={confirm}
          >
            Confirm
          </Button>
        </>
      ) : (
        <></>
      )}
    </NextAndPrevRoot>
  );
}
