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
  onLoad?: () => void;
}

export default function Panel(props: PanelProps) {
  const theme = useTheme();
  const { src, activeTab, tabNumber, ...titleAndSubtitleProps } = props;
  const isVisible = activeTab === tabNumber;

  if (!isVisible) return <></>;

  return (
    <StyledPanel>
      <LeftSide>
        <div className="image-wrapper">
          <img
            src={src}
            alt="features image"
            onLoad={() => {
              if (props.onLoad) props.onLoad();
            }}
          />
        </div>
      </LeftSide>
      <RightSide>
        <TitleAndSubtitle
          {...titleAndSubtitleProps}
          sx={{
            marginTop: "60px",
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
