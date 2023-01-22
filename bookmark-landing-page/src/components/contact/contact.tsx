//components
import {
  StyledContact,
  Title,
  Content,
  InputWrapper,
  Input,
  StyledButton,
} from "./styles";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

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
          <InputWrapper className="inputWrapper">
            <Input placeholder="Enter your email address" type="email" />
            <Typography variant="caption" color="white">Whoops, make sure it's an email</Typography>
          </InputWrapper>
          <StyledButton variant="contained" color="secondary" disableElevation>
            Contact Us
          </StyledButton>
        </form>
      </Container>
    </StyledContact>
  );
}
