//components
import { StyledAccordion } from "./styles";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "../../icons/ExpandMore";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem(props: FaqItemProps) {
  return (
    <StyledAccordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.answer}</Typography>
      </AccordionDetails>
    </StyledAccordion>
  );
}
