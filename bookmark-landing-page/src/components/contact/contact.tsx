//components
import {
  StyledContact,
  Title,
  Content,
  Form,
  InputWrapper,
  Input,
  StyledButton,
} from "./styles";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

//icons
import ErrorIcon from "../../icons/Error";

export default function Contact() {
  return (
    <StyledContact id="Contact">
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
        <Form className="row">
          <InputWrapper className="inputWrapper">
            <Input placeholder="Enter your email address" type="email" />
            <Typography variant="caption" color="white">
              Whoops, make sure it's an email
            </Typography>
            <ErrorIcon />
          </InputWrapper>
          <StyledButton variant="contained" color="secondary" disableElevation>
            Contact Us
          </StyledButton>
        </Form>
      </Container>
    </StyledContact>
  );
}
