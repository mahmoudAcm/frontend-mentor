//components
import { Section, Browsers } from "./styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SectionHeader from "../section-header";
import Browser from "./browser";

export default function Download() {
  return (
    <Section>
      <Container>
        <SectionHeader
          title="Download the extension"
          subtite="We've got more browsers in the pipeline. Please
        do let us know if you've got a favourite you'd like us to prioritize."
        />
        <Browsers>
          <Browser
            logo="./images/logo-chrome.svg"
            title="Add to Chrome"
            subtitle="Minimum version 62"
            name="chrome"
          />
          <Browser
            logo="./images/logo-firefox.svg"
            title="Add to Firefox"
            subtitle="Minimum version 55"
            name="firefox"
            marginTop="var(--margin-top)"
          />
          <Browser
            logo="./images/logo-opera.svg"
            title="Add to Opera"
            subtitle="Minimum version 46"
            name="opera"
            marginTop="calc(var(--factor) * var(--margin-top))"
          />
        </Browsers>
      </Container>
    </Section>
  );
}
