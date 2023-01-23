import { useState } from "react";

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
import TitleAndSubtitle from "../titleAndSubtitle";

//utils
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();
  const [isImageLoading, setImageLoading] = useState(true);
  return (
    <Section>
      <Container>
        <FirstHalf>
          <TitleAndSubtitle
            title="A Simple Bookmark Manager"
            subtitle="A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free."
            sx={{
              marginTop: 0,
              [theme.breakpoints.up("lg")]: {
                alignItems: "flex-start",
                "& .title": {
                  fontSize: "2.65rem",
                  textAlign: "start",
                  lineHeight: 1.14,
                },
                "& .subtitle": {
                  maxWidth: 490,
                  textAlign: "start",
                  fontSize: "1.02rem",
                },
              },
            }}
          />
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
            onLoad={() => {
              setImageLoading(false);
            }}
          />
        </SecondHalf>
      </Container>
      {!isImageLoading ? <div className="background"></div> : <></>}
    </Section>
  );
}
