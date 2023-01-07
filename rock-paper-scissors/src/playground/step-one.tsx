import Box from "@mui/material/Box";
import { Paper, Scissors, Rock } from "./items";
import { StyledPlayground } from "./styles";

export default function StepOne() {
  return (
    <Box className="inner">
      {Paper}
      {Scissors}
      {Rock}
      <svg
        width="313"
        height="278"
        viewBox="0 0 313 278"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="#000"
          strokeWidth="15"
          fill="none"
          opacity=".2"
          d="M156.5 262 300 8H13z"
        />
      </svg>
    </Box>
  );
}
