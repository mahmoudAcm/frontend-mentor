import { useState } from "react";

//hooks
import useMaxWidth from "./hooks/useMaxWidth";

//contexts
import { useData } from "./context";

interface CommentFormProps {
  type: "comment" | "replay";
  commentId?: string;
  replyingTo?: string;
}

const buttonText = {
  comment: "SEND",
  replay: "REPLAY",
};

export default function CommentForm(props: CommentFormProps) {
  const { currentUser, addComment, addReplay } = useData();
  const [content, setContent] = useState("");
  const isWidthLessThan375 = useMaxWidth(375);

  const handleForm = () => {
    if (props.type === "comment") {
      addComment(content);
      setContent("");
      return;
    }

    console.log(props.replyingTo);
    addReplay(
      props.commentId!,
      "@" + props.replyingTo + " " + content,
      props.replyingTo!
    );
    setContent("");
  };

  return (
    <div className="flex min-h-[100px] gap-[10px] rounded-md bg-white p-[17px] [@media(width_<=_375px)]:flex-col">
      {!isWidthLessThan375 ? (
        <img
          src={currentUser.image.png}
          className="h-[28px] w-[28px]"
          alt="profile picture"
          width="24"
          height="24"
        />
      ) : (
        <></>
      )}
      <textarea
        className="textarea flex-1"
        placeholder="Add a comment..."
        value={content}
        onChange={(e) => {
          setContent(e.currentTarget.value);
        }}
      />
      {isWidthLessThan375 ? (
        <div className="flex items-center justify-between">
          <img
            src={currentUser.image.png}
            className="h-[28px] w-[28px]"
            alt="profile picture"
            width="24"
            height="24"
          />
          <button
            className="button w-fit bg-[#5358b4] text-[13px]"
            onClick={handleForm}
          >
            {buttonText[props.type]}
          </button>
        </div>
      ) : (
        <button
          className="button w-fit bg-[#5358b4] text-[13px]"
          onClick={handleForm}
        >
          {buttonText[props.type]}
        </button>
      )}
    </div>
  );
}
