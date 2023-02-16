import { createSvgIcon } from "@mui/material";

const CheckMark = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9">
    <path
      fill="none"
      stroke="#FFF"
      strokeWidth="2"
      d="m1 4 3.433 3.433L10.866 1"
    />
  </svg>,
  "CheckMark"
);

export default CheckMark;
