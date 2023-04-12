import { Box, InputBase, styled } from "@mui/material";
import { useRef } from "react";
import { IP_DOMAIN_REGX } from "../constants";
import ArrowIcon from "../icons/Arrow";

const FormControl = styled("form")(({ theme }) => ({
  display: "flex",
  borderRadius: theme.shape.borderRadius * 4,
  overflow: "hidden",
  height: 58,
  [theme.breakpoints.down("sm")]: {
    width: "96%",
    marginTop: 2,
  },
}));

const Input = styled(InputBase)(({ theme }) => ({
  width: 497,
  fontSize: "1.125rem",
  padding: "28px 25px",
  background: "white",
  "&:hover": {
    color: "#2b2b2b",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const InputAddorment = styled(Box)(({ theme }) => ({
  width: 58,
  background: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: theme.transitions.create(["background"], {
    duration: 250,
  }),
  "&:hover": {
    background: "#3f3f3f",
  },
  [theme.breakpoints.down("sm")]: {
    width: 75,
  },
}));

interface IPDomainFormProps {
  onSubmit: (value: string, errors: string[]) => void;
}

export default function IPDomainForm(props: IPDomainFormProps) {
  const ipDomainInputRef = useRef<HTMLInputElement>();

  const handleSubmit = () => {
    const errors = [];
    const isMatching = ipDomainInputRef.current?.value.match(IP_DOMAIN_REGX);
    if (!ipDomainInputRef.current?.value) {
      errors.push("The ip/domain can't be empty");
    }
    if (!isMatching) {
      errors.push("It is not a valid ip/domain");
    }
    props.onSubmit(ipDomainInputRef.current?.value!, errors);
  };

  return (
    <FormControl
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Input
        placeholder="Search for any IP address or domain"
        inputRef={ipDomainInputRef}
        autoCapitalize="off"
        autoCorrect="off"
      />
      <InputAddorment onClick={handleSubmit}>
        <ArrowIcon />
      </InputAddorment>
    </FormControl>
  );
}
