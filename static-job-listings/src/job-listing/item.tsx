//components
import { Avatar } from "@mui/material";
import { StyledItem, JobDiscriptionFirstColumn } from "./styles";
import Title from "./title";
import Languages from "./languages";

export default function Item() {
  return (
    <StyledItem component="li">
      <Avatar src="./images/photosnap.svg"></Avatar>
      <JobDiscriptionFirstColumn>
        <Title />
        <h2>Senior Frontend Developer</h2>
        <div className="last-row">
          <span>1d ago</span>
          <span>Full Time</span>
          <span>USA only</span>
        </div>
      </JobDiscriptionFirstColumn>
      <Languages />
    </StyledItem>
  );
}
