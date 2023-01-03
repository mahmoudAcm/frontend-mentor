import { useEffect, useState } from "react";

//icons
import PlusIcon from "./icons/plus";
import MinusIcon from "./icons/minus";

//contexts
import { useData } from "./context";

export default function VoteButton({
  children,
  ...props
}: {
  children: number;
  type: "comment" | "replay";
  parentId: string;
  id: string;
}) {
  const { editCommentOrReplay } = useData();
  const [voteCount, setCount] = useState(children);

  const handleUpvote = () => {
    setCount((count) => count + 1);
  };

  const handleDownvote = () => {
    setCount((count) => count - 1);
  };

  useEffect(() => {
    if (voteCount !== children) {
      editCommentOrReplay(
        {
          score: voteCount,
        },
        props.parentId,
        props.type,
        props.id
      );
    }
  }, [voteCount]);

  return (
    <div className="flex h-[69px] w-[28px] flex-col items-center justify-around rounded-[8px] bg-[#f5f6fa] py-[2px] text-[13px] font-medium text-[#5c61ac] [@media_(max-width:375px)]:h-[38px] [@media_(max-width:375px)]:w-[100px] [@media_(max-width:375px)]:flex-row">
      <span className="group cursor-pointer" onClick={handleUpvote}>
        <PlusIcon
          width="9"
          height="9"
          className="transition-[0.5s] group-hover:fill-[#5358b4]"
        />
      </span>
      <span>{voteCount}</span>
      <span className="group cursor-pointer" onClick={handleDownvote}>
        <MinusIcon
          width="9"
          height="9"
          className="transition-[0.5s] group-hover:fill-[#5358b4]"
        />
      </span>
    </div>
  );
}
