//components
import { Avatar } from "@mui/material";
import { StyledItem, JobDiscriptionFirstColumn } from "./styles";
import Title from "./title";
import LanguagesAndTools from "./languages-and-tools";

//types
import { Job } from "../types";

interface ItemProps extends Job {
  className?: string;
}

export default function Item(props: ItemProps) {
  return (
    <StyledItem component="li" className={props.className}>
      <Avatar src={props.logo} alt="company logo"></Avatar>
      <JobDiscriptionFirstColumn>
        <Title
          company={props.company}
          new={props.new}
          featured={props.featured}
        />
        <h2>{props.position}</h2>
        <div className="last-row">
          <span>{props.postedAt}</span>
          <span>{props.contract}</span>
          <span>{props.location}</span>
        </div>
      </JobDiscriptionFirstColumn>
      <LanguagesAndTools list={[props.role, props.level, ...props.tools, ...props.languages]}/>
    </StyledItem>
  );
}
