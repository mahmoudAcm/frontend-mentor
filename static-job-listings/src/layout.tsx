//components
import Container from "@mui/material/Container";
import { StyledLayout } from "./styles";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <StyledLayout>
      <div className="header"></div>
      <Container>{children}</Container>
    </StyledLayout>
  );
}
