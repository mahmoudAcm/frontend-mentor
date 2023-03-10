//components
import { StyledFaq, QuestionAndAnswer, StyledButton } from "./styles";
import Container from "@mui/material/Container";
import TitleAndSubtitle from "../titleAndSubtitle";
import Item from "./item";

const faqs = [
  {
    question: "What is Bookmark?",
    answer: "1",
  },
  {
    question: "How can I request a new browser?",
    answer: "2",
  },
  {
    question: "Is there a mobile app?",
    answer: "3",
  },
  {
    question: "What about other Chromium browsers?",
    answer: "4",
  },
];

export default function Faq() {
  return (
    <StyledFaq>
      <Container>
        <TitleAndSubtitle
          title="Frequently Asked Questions"
          subtitle="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
        />
        <QuestionAndAnswer>
          {faqs.map((faq, idx) => (
            <Item {...faq} key={idx} />
          ))}
          <StyledButton variant="contained" disableElevation>More Info</StyledButton>
        </QuestionAndAnswer>
      </Container>
    </StyledFaq>
  );
}
