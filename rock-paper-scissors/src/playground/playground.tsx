import Box from "@mui/material/Box";
import { useGame } from "../context";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import { StyledPlayground } from "./styles";

export default function Playground() {
  const { picked } = useGame();
  return (
    <StyledPlayground>
      {picked === "None" ? <StepOne /> : <StepTwo/>}
    </StyledPlayground>
  );
}
