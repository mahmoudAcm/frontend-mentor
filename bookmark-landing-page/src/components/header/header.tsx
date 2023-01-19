//components
import { Typography, Button } from "@mui/material";
import { Header as AppBar, Container, Nav } from "./styles";

export default function Header() {
  return (
    <AppBar elevation={0} color="transparent" position="relative">
      <Container>
        <img src="./images/logo-bookmark.svg" />
        <Nav>
          <ul>
            <Typography component="li">Features</Typography>
            <Typography component="li">Pricing</Typography>
            <Typography component="li">Contact</Typography>
          </ul>
          <Button variant="contained" color="secondary" disableElevation>
            <Typography fontWeight={500}>
              LOGIN
            </Typography>
          </Button>
        </Nav>
      </Container>
    </AppBar>
  );
}
