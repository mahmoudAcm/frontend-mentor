//components
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { StyledFilter, Paper, List, TagWithCloseIcon } from "./styles";

//contexts
import { useFilter } from "./context";

export default function Filter() {
  const { isFilterOpen } = useFilter();
  if (!isFilterOpen) return <></>;
  return (
    <StyledFilter>
      <Container>
        <Paper>
          <List component="ul">
            <TagWithCloseIcon>Frontend</TagWithCloseIcon>
            <TagWithCloseIcon>CSS</TagWithCloseIcon>
            <TagWithCloseIcon>JavaScript</TagWithCloseIcon>
          </List>
          <Button>Clear</Button>
        </Paper>
      </Container>
    </StyledFilter>
  );
}
