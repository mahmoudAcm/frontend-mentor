//compontents
import { Typography } from "@mui/material";
import {
  StyledCard,
  Image,
  CardContent,
  CardFooter,
  StyledButton,
} from "./styles";

interface CardProps {
  logo: string;
  title: string;
  subtitle: string;
  name: string;
  marginTop?: string;
}

export default function Broswer(props: CardProps) {
  return (
    <StyledCard style={{ marginTop: props.marginTop ?? undefined }}>
      <CardContent>
        <Image
          src={props.logo}
          alt={props.name + " browser logo"}
          variant="square"
          imgProps={{
            width: 102,
            height: 100,
          }}
        />
        <Typography variant="body1" fontWeight={500}>
          {props.title}
        </Typography>
        <Typography variant="subtitle2" color="#97969a" fontWeight={400}>
          {props.subtitle}
        </Typography>
      </CardContent>
      <img src="./images/bg-dots.svg" alt=""/>
      <CardFooter>
        <StyledButton variant="contained" fullWidth disableElevation>
          Add & Install Extension
        </StyledButton>
      </CardFooter>
    </StyledCard>
  );
}
