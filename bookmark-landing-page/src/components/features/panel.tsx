import { useEffect, useState, useRef } from "react";

//components
import { StyledPanel, LeftSide, RightSide, StyledButton } from "./styles";
import TitleAndSubtitle from "../titleAndSubtitle";

//utils
import { useTheme } from "@mui/material";

//types
import { TitleAndSubtitleProps } from "../titleAndSubtitle";

interface PanelProps extends Omit<TitleAndSubtitleProps, "sx"> {
  src: string;
  tabNumber: number;
  activeTab: number;
}

export default function Panel(props: PanelProps) {
  const theme = useTheme();
  const { src, activeTab, tabNumber, ...titleAndSubtitleProps } = props;
  const isVisible = activeTab === tabNumber;
  const [className, setClassName] = useState<string | undefined>();
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    if (isVisible) {
      timeoutRef.current = setTimeout(() => {
        setClassName("show");
      }, 20);
    } else {
      setClassName(undefined);
    }

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible]);

  if (!isVisible) return <></>;

  return (
    <StyledPanel className={className}>
      <LeftSide>
        <img src={src} alt="features image" />
      </LeftSide>
      <RightSide>
        <TitleAndSubtitle
          {...titleAndSubtitleProps}
          sx={{
            [theme.breakpoints.up("lg")]: {
              "& .title": {
                width: "100% !important",
                textAlign: "start !important",
              },
              marginTop: "60px",
              "& .subtitle": {
                width: 437,
                textAlign: "start !important",
              },
            },
            [theme.breakpoints.down("sm")]: {
              "& .subtitle": {
                width: 310,
              },
            },
          }}
        />
        <StyledButton variant="contained">More Info</StyledButton>
      </RightSide>
    </StyledPanel>
  );
}
