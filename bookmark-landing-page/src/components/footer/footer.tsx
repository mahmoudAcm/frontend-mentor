//components
import { Typography, Link } from "@mui/material";
import { StyledFooter, Container, Nav, List, Links } from "./styles";

//icons
import LogoIcon from "../../icons/Logo";
import FacebookIcon from "../../icons/Facebook";
import TwitterIcon from "../../icons/Twitter";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <LogoIcon color="white" />
        <Nav>
          <List>
            <Typography component="li">
              <Link href="#Features">Features</Link>
            </Typography>
            <Typography component="li">
              <Link href="#Pricing">Pricing</Link>
            </Typography>
            <Typography component="li">
              <Link href="#Contact">Contact</Link>
            </Typography>
          </List>
        </Nav>
        <Links>
          <FacebookIcon />
          <TwitterIcon />
          {/* <img src="./images/icon-facebook.svg" alt="bookmark facebook link" />
          <img src="./images/icon-twitter.svg" alt="bookmark twitter link" /> */}
        </Links>
      </Container>
    </StyledFooter>
  );
}
