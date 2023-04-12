//components
import { StyledTitleAndSubtitle } from "./styles";
import { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface TitleAndSubtitleProps {
  title: string;
  subtitle: string;
  sx?: BoxProps["sx"];
}

export default function TitleAndSubtitle(props: TitleAndSubtitleProps) {
  return (
    <StyledTitleAndSubtitle sx={props.sx}>
      <Typography className="title">{props.title}</Typography>
      <Typography className="subtitle">{props.subtitle}</Typography>
    </StyledTitleAndSubtitle>
  );
}
