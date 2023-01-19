//components
import { StyledContact, Title, Content, Input, StyledButton } from "./styles";
import Container from "@mui/material/Container";

export default function Contact() {
  return (
    <StyledContact>
      <Container>
        <div className="row">
          <Title color="white" className="title">
            35.000+ ALREADY JOINED
          </Title>
        </div>
        <div className="row">
          <Content color="white" align="center">
            Stay up-to-date with what we're doing
          </Content>
        </div>
        <form className="row">
          <Input placeholder="Enter your email address" type="email" />
          <StyledButton variant="contained" color="secondary" disableElevation>
            Contact Us
          </StyledButton>
        </form>
      </Container>
    </StyledContact>
  );
}
