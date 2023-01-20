//components
import { Typography, Button } from "@mui/material";
import { Header as AppBar, Container, MenuButton, Nav, List } from "./styles";

//icons
import MenuIcon from "../../icons/Menu";

export default function Header() {
  const list = (className?: "desktop") => (
    <List className={className}>
      <Typography component="li">Features</Typography>
      <Typography component="li">Pricing</Typography>
      <Typography component="li">Contact</Typography>
    </List>
  );

  return (
    <AppBar elevation={0} color="transparent" position="relative">
      <Container>
        <img src="./images/logo-bookmark.svg" />
        <Nav>
          <MenuButton className="menu">
            <MenuIcon />
          </MenuButton>
          {list("desktop")}
          <Button variant="contained" color="secondary" disableElevation>
            <Typography fontWeight={500}>LOGIN</Typography>
          </Button>
        </Nav>
      </Container>
    </AppBar>
  );
}
