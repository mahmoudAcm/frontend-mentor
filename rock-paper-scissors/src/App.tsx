//components
import Box from "@mui/material/Box";
import { StyledApp } from "./app.styles";
import Screen from "./screen";
import Button from "./rules/button";
import Playground from "./playground";
import GameProvider from "./context";
import Rules from "./rules";

export default function App() {
  return (
    <GameProvider>
      <StyledApp>
        <Screen />
        <Button />
        <Playground />
        <Rules />
      </StyledApp>
    </GameProvider>
  );
}
