import { createSvgIcon, SvgIconProps } from "@mui/material";

const Arrow = createSvgIcon(
  <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />,
  "Arrow"
);

export default function ArrowIcon(props: SvgIconProps) {
  return (
    <Arrow viewBox="0 0 11 14" sx={{ width: 11, height: 14 }} {...props} />
  );
}
