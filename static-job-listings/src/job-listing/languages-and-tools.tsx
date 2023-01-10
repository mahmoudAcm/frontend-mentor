//components
import { StyledLanguagesAndTools, Tag } from "./styles";

interface LanguagesAndToolsProps {
  list: string[];
}

export default function LanguagesAndTools(props: LanguagesAndToolsProps) {
  return (
    <StyledLanguagesAndTools component="ul">
      {props.list.map((lang, idx) => (
        <Tag key={idx}>{lang}</Tag>
      ))}
    </StyledLanguagesAndTools>
  );
}
