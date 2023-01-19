//components
import { Section, FirstHalf, Butttons } from "./styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Section>
      <FirstHalf>
        <Typography fontWeight={500} variant="h3">
          A Simple Bookmark Manager
        </Typography>
        <Typography color="#a4a6ab">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </Typography>
        <Butttons>
          <Button variant="contained" disableElevation>Get it on Chrome</Button>
          <Button variant="contained" disableElevation>Get it on Firefox</Button>
        </Butttons>
      </FirstHalf>
      <img src="./images/illustration-hero.svg"/>
    </Section>
  );
}
