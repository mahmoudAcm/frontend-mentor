import { useTheme } from "theme";

//components
import { Typography } from "@mui/material";
import { AppBar, ToggleButton, Toolbar } from "./styles";

//icons
import MoonIcon from "../../icons/Moon";

export default function Header() {
  const theme = useTheme();
  return (
    <AppBar>
      <Toolbar>
        <Typography fontSize="1.7rem" fontWeight={800}>
          Where in the world?
        </Typography>
        <ToggleButton
          startIcon={<MoonIcon />}
          onClick={() => {
            theme.toggleColorMode();
          }}
          disableRipple
        >
          {theme.palette.mode === "light" ? "Dark Mode" : "Light Mode"}
        </ToggleButton>
      </Toolbar>
    </AppBar>
  );
}
