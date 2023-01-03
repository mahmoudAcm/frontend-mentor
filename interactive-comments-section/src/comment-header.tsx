import { useEffect, useState } from "react";

//types
import { DataType } from "./context";
import CommentActions, { CommentActionsProps } from "./comment-actions";

//hooks
import useMaxWidth from "./hooks/useMaxWidth";

//utils
import formatTimeToRelative from "./format-time-to-relative";

interface CommentHeaderProps
  extends Omit<DataType["comments"][0], "content" | "score">,
    CommentActionsProps {}

export default function CommentHeader(props: CommentHeaderProps) {
  const { createdAt, id, user, replies, ...actions } = props;
  const [date, setDate] = useState(formatTimeToRelative(createdAt));

  const isWidthLessThan375 = useMaxWidth(375);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(formatTimeToRelative(createdAt));
    }, 1000);

    return () => {
      if (interval !== null) clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex h-[23px] flex-1 items-center gap-x-[10px] text-[12px]">
      <img src={user.image.png} className="w-[23px]" />
      <span className="font-bold text-[#38404a]">{user.username}</span>
      {props.owner ? (
        <span className="select-none rounded-sm bg-[#5358b4] px-[3px] font-medium text-white">
          you
        </span>
      ) : (
        <></>
      )}
      <span className="flex-1 text-[#6f7279]">{date}</span>

      {!isWidthLessThan375 ? <CommentActions {...actions} /> : <></>}
    </div>
  );
}
