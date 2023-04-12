import { useGame } from "../context";
import { StyledResult } from "./styles";

export default function Result() {
  const { result, setResult, setPicked } = useGame();
  if (!result) return <></>;
  return (
    <StyledResult>
      <span>YOU {result}</span>
      <button
        onClick={() => {
          setResult("");
          setPicked("None");
        }}
      >
        Play Again
      </button>
    </StyledResult>
  );
}
