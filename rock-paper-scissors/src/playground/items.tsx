import Item from "../item";
import PaperIcon from "../icons/Paper";
import ScissorsIcon from "../icons/Scissors";
import RockIcon from "../icons/Rock";

export const Paper = (
  <Item
    colors={["hsl(230, 89%, 65%)", "hsl(230, 89%, 62%)"]}
    type="Paper"
    icon={<PaperIcon />}
  />
);

export const Scissors = (
  <Item
    colors={["hsl(40, 84%, 53%)", "hsl(39, 89%, 49%)"]}
    type="Scissors"
    icon={<ScissorsIcon />}
  />
);

export const Rock = (
  <Item
    colors={["hsl(349, 70%, 56%)", "hsl(349, 71%, 52%)"]}
    type="Rock"
    icon={<RockIcon />}
  />
);

export const None = <></>;
