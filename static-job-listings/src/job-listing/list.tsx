//components
import { StyledList } from "./styles";
import Item from "./item";

//types
import { Job } from "../types";

interface ListProps {
  jobs: Job[];
}

export default function List(props: ListProps) {
  return (
    <StyledList component="ul">
      {props.jobs.map((job) => (
        <Item {...job} key={job.id} />
      ))}
    </StyledList>
  );
}
