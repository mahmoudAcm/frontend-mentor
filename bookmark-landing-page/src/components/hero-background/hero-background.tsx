//types
import { Container } from "@mui/system";
import { HTMLAttributes } from "react";

//components
import { Section, Background } from "./styles";

interface HeroBackgroundProps extends HTMLAttributes<HTMLSelectElement> {}

export default function HeroBackground({
  children,
  ...props
}: HeroBackgroundProps) {
  return (
    <Section {...props}>
      <Container>{children}</Container>
      <Background className="background">
        <div className="elem"></div>
      </Background>
    </Section>
  );
}
