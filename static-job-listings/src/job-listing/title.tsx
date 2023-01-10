//components
import { StyledTitle } from "./styles";

export default function Title() {
  return (
    <StyledTitle>
      <h3>Photosnap</h3>
      <span className="new">NEW!</span>
      <span className="featured">FEATURED</span>
    </StyledTitle>
  );
}
