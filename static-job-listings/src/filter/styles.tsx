import Box, { BoxProps } from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import { Tag } from "../styles";

export const StyledFilter = styled(Box)(() => ({
  width: "100%",
  position: "absolute",
  top: 120,
}));

export const Paper = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  minHeight: 100,
  backgroundColor: "white",
  boxShadow: `0 23px 23px -22px ${alpha("#5da5a3", 0.6)}`,
  borderRadius: 5,
  padding: 20,
  display: "flex",
  alignItems: "center",
  "& button": {
    textTransform: "capitalize",
    color: "gray",
    fontWeight: 700,
    fontSize: "1rem",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const List = styled(Box)(() => ({
  display: "flex",
  gap: 15,
  flexWrap: "wrap",
  flex: 1,
  margin: 0,
  padding: 0,
}));

export const TagWithCloseIcon = styled(function ({
  children,
  ...props
}: BoxProps) {
  return (
    <Box component="li" {...props}>
      <Tag component="div" className="tag">
        {children}
      </Tag>
      <span className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
          />
        </svg>
      </span>
    </Box>
  );
})(() => ({
  listStyleType: "none",
  display: "flex",
  width: "fit-content",
  height: "fit-content",
  borderRadius: 5,
  overflow: "hidden",
  "& .tag": {
    borderRadius: 0,
  },
  "& .icon": {
    cursor: "pointer",
    padding: "10px 7px",
    backgroundColor: "#5da5a3",
    display: "flex",
    placeItems: "center",
  },
}));
