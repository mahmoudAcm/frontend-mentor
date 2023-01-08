import Box from "@mui/material/Box";
import { useGame, Type } from "./context";
import { ItemWrapper, StyledItem } from "./item.styles";

interface ItemProps {
  colors: [string, string];
  type: Type;
  icon: JSX.Element;
}

export default function Item(props: ItemProps) {
  const { picked, setPicked } = useGame();
  return (
    <ItemWrapper
      className={"item " + props.type}
      sx={{ backgroundColor: props.colors[1] }}
    >
      <StyledItem
        onClick={() => {
          if (picked === "None") setPicked(props.type);
        }}
        sx={{ borderColor: props.colors[0] }}
      >
        <Box className="_1">{props.icon}</Box>
      </StyledItem>
    </ItemWrapper>
  );
}
