//components
import { Box } from "@mui/material";
import { useGame } from "./context";
import { StyledScreen } from "./screen.styles";

export default function Screen() {
  const { score } = useGame();
  return (
    <StyledScreen>
      <img src="./images/logo.svg" alt="logo" />
      <Box className="score">
        <span className="text">SCORE</span>
        <span className="value">{score}</span>
      </Box>
    </StyledScreen>
  );
}
