//components
import Container from "@mui/material/Container";
import { StyledLayout } from "./styles";
import Filter from "./filter";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <StyledLayout>
      <div className="header">
        <Filter />
      </div>
      <Container>{children}</Container>
    </StyledLayout>
  );
}
