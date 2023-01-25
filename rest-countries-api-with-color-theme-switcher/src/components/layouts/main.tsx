//components
import { StyledMain } from "./styles";
import Header from "../header";

export default function Main({ children }: { children: JSX.Element }) {
  return (
    <StyledMain>
      <Header />
      {children}
    </StyledMain>
  );
}
