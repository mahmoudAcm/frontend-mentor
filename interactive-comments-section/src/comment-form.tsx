//types
import { CommentType } from "./App";

//hooks
import useMaxWidth from "./hooks/useMaxWidth";

interface CommentFormProps {
  type: "comment" | "replay";
  user: CommentType["currentUser"];
}

const buttonText = {
  comment: "SEND",
  replay: "REPLAY",
};

export default function CommentForm(props: CommentFormProps) {
  const isWidthLessThan375 = useMaxWidth(375);

  return (
    <div className="flex min-h-[100px] gap-[10px] rounded-md bg-white p-[17px] [@media(width_<=_375px)]:flex-col">
      {!isWidthLessThan375 ? (
        <img src={props.user.image.png} className="h-[28px] w-[28px]" />
      ) : (
        <></>
      )}
      <textarea className="textarea flex-1" placeholder="Add a comment..." />
      {isWidthLessThan375 ? (
        <div className="flex items-center justify-between">
          <img src={props.user.image.png} className="h-[28px] w-[28px]" />
          <button className="button w-fit bg-[#5358b4] text-[13px]">
            {buttonText[props.type]}
          </button>
        </div>
      ) : (
        <button className="button w-fit bg-[#5358b4] text-[13px]">
          {buttonText[props.type]}
        </button>
      )}
    </div>
  );
}
