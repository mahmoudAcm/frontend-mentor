//components
import { StyledTitle } from "./styles";

interface TitleProps {
  company: string;
  new?: boolean;
  featured?: boolean;
}

export default function Title(props: TitleProps) {
  return (
    <StyledTitle>
      <h3>{props.company}</h3>
      {props.new ? <span className="new">NEW!</span> : <></>}
      {props.featured ? <span className="featured">FEATURED</span> : <></>}
    </StyledTitle>
  );
}
