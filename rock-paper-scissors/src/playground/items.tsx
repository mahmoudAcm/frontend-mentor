import Item from "../item";

export const Paper = (
  <Item
    colors={["hsl(230, 89%, 65%)", "hsl(230, 89%, 62%)"]}
    type="Paper"
    src="/images/icon-paper.svg"
  />
);

export const Scissors = (
  <Item
    colors={["hsl(40, 84%, 53%)", "hsl(39, 89%, 49%)"]}
    type="Scissors"
    src="/images/icon-scissors.svg"
  />
);

export const Rock = (
  <Item
    colors={["hsl(349, 70%, 56%)", "hsl(349, 71%, 52%)"]}
    type="Rock"
    src="/images/icon-rock.svg"
  />
);

export const None = <></>;
