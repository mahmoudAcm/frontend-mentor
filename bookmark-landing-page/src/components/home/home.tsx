//components
import {
  Section,
  Container,
  FirstHalf,
  Butttons,
  SecondHalf,
  Image,
} from "./styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//utils
import { useTheme, Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useMedia = (cb: (theme: Theme) => string) => {
  const theme = useTheme();
  return useMediaQuery(() => cb(theme));
};

export default function Home() {
  const isMobile = useMedia((theme) => theme.breakpoints.down("md"));
  return (
    <Section>
      <Container>
        <FirstHalf>
          <Typography fontWeight={500} variant="h3">
            A Simple Bookmark Manager
          </Typography>
          <Typography color="#a4a6ab">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Typography>
          <Butttons>
            <Button variant="contained" disableElevation>
              Get it on Chrome
            </Button>
            <Button variant="contained" disableElevation>
              Get it on Firefox
            </Button>
          </Butttons>
        </FirstHalf>
        <SecondHalf>
          <Image
            src="./images/illustration-hero.svg"
          />
        </SecondHalf>
      </Container>
      <div className="background"></div>
    </Section>
  );
}
