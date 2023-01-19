//components
import { StyledSectionHeader } from "./styles";
import Typography from "@mui/material/Typography";

interface SectionHeaderProps {
  title: string;
  subtite: string;
}

export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <StyledSectionHeader>
      <Typography className="title">{props.title}</Typography>
      <Typography className="subtitle">{props.subtite}</Typography>
    </StyledSectionHeader>
  );
}
