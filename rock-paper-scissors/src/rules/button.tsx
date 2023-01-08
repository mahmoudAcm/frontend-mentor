//components
import { useGame } from "../context";
import { StyledButton } from "./styles";

export default function Button() {
  const { setRulesModelOpening } = useGame();
  return (
    <StyledButton
      onClick={() => {
        setRulesModelOpening(true);
      }}
    >
      RULES
    </StyledButton>
  );
}
