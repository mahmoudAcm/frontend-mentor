//components
import Box from "@mui/material/Box";
import { StyledApp } from "./app.styles";
import Screen from "./screen";
import Button from "./rules/button";
import Playground from "./playground";
import GameProvider from "./context";

export default function App() {
  return (
    <GameProvider>
      <StyledApp>
        <Screen />
        <Button />
        <Playground />
      </StyledApp>
    </GameProvider>
  );
}
