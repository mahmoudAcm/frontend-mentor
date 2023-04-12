//components
import { StyledList } from "./styles";
import Item from "./item";

//types
import { Job } from "../types";

//contexts
import { useFilter } from "../filter/context";

interface ListProps {
  jobs: Job[];
}

export default function List(props: ListProps) {
  const { isFilterOpen } = useFilter();
  return (
    <StyledList
      component="ul"
      sx={{
        "--offset": isFilterOpen ? "90px" : "0px",
      }}
    >
      {props.jobs.map((job, idx) => (
        <Item {...job} key={job.id} className={idx <= 1 ? "active" : ""} />
      ))}
    </StyledList>
  );
}
