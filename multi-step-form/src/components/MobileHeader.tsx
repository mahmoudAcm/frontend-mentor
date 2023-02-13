import { Box, styled } from "@mui/material";

const MobileHeaderRoot = styled(Box)(({ theme }) => ({
  display: "none",
  // width: "100",
  height: 172,
  backgroundImage: "url('./assets/images/bg-sidebar-mobile.svg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  justifyContent: "center",
  gap: 16,
  "& .circle": {
    marginTop: 32,
    width: 33,
    height: 33,
    borderRadius: "50%",
    border: "1px solid white",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: theme.typography.fontWeightMedium,
    "&.active": {
      backgroundColor: "#c0e4ff",
      borderColor: "#c0e4ff",
      color: "#0a2b59",
    },
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

export default function MobileHeader() {
  return (
    <MobileHeaderRoot>
      {new Array(4).fill(0).map((_, idx) => (
        <div
          key={idx}
          className={["circle", idx === 2 ? "active" : ""]
            .filter(Boolean)
            .join(" ")}
        >
          {idx + 1}
        </div>
      ))}
    </MobileHeaderRoot>
  );
}
