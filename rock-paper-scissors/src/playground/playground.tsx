import Container from "@mui/material/Container";
import { useGame } from "../context";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import { StyledPlayground } from "./styles";

export default function Playground() {
  const { picked } = useGame();
  return (
    <StyledPlayground>
      <Container>{picked === "None" ? <StepOne /> : <StepTwo />}</Container>
    </StyledPlayground>
  );
}
