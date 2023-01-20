//components
import { Typography } from "@mui/material";
import { StyledFooter, Container, Nav, List, Links } from "./styles";

//icons
import LogoIcon from "../../icons/Logo";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <LogoIcon color="white" />
        <Nav>
          <List>
            <Typography component="li">Features</Typography>
            <Typography component="li">Pricing</Typography>
            <Typography component="li">Contact</Typography>
          </List>
        </Nav>
        <Links>
          <img src="./images/icon-facebook.svg" alt="bookmark facebook link" />
          <img src="./images/icon-twitter.svg" alt="bookmark twitter link" />
        </Links>
      </Container>
    </StyledFooter>
  );
}