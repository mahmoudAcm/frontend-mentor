import { useEffect, useState } from "react";

//components
import VoteButton from "./vote-btn";
import CommentHeader from "./comment-header";
import CommentForm from "./comment-form";
import Modal from "./delete-modal";

//types
import { DataType } from "./context";

//hooks
import useMaxWidth from "./hooks/useMaxWidth";
import CommentActions from "./comment-actions";

//contexts
import { useData } from "./context";

type CommentProps = DataType["comments"][0] & {
  width?: string | number;
  parentId: string;
  type: "comment" | "replay";
};

export default function Comment(props: CommentProps) {
  const { content, type, ...headerProps } = props;
  const { currentUser, editCommentOrReplay, removeCommentOrReplay } = useData();
  const [bodyContent, setBodyContent] = useState(content);

  const isWidthLessThan375 = useMaxWidth(375);

  /** modal state */
  const deleteModalState = useState({ open: false, save: false });
  const [isModalState] = deleteModalState;

  const [isReplaySectionOpen, setReplaySectionOpening] = useState(false);
  const [isEditSectionOpen, setEditSectionOpening] = useState(false);

  const Body = isEditSectionOpen ? "textarea" : "p";

  const owner = currentUser.username === props.user.username;

  const handleReplay = () => {
    setReplaySectionOpening((prev) => !prev);
  };

  const handleEdit = () => {
    setEditSectionOpening(true);
  };

  const handleDelete = () => {
    deleteModalState[1]({ open: true, save: false });
  };

  //watching delete confirmation
  useEffect(() => {
    if (deleteModalState[0].save) {
      if (type === "comment") removeCommentOrReplay(props.id, type);
      else {
        removeCommentOrReplay(props.parentId, type, props.id);
        console.log(props.parentId, props.id);
      }
    }
  }, [deleteModalState]);

  const handleUpdate = () => {
    if (bodyContent === content) {
      setEditSectionOpening(false);
      return;
    }
    if (type === "comment") editCommentOrReplay(bodyContent, props.id, type);
    else editCommentOrReplay(bodyContent, props.parentId, type, props.id);
    setEditSectionOpening(false);
  };

  return (
    <div className="flex min-h-fit w-fit flex-col gap-y-[4px]">
      <div
        className="flex min-h-[110px] gap-x-[18px] rounded-[7px] bg-white px-[16px] py-[22px]"
        style={{
          width: props.width ?? (isWidthLessThan375 ? "340px" : "545px"),
        }}
      >
        {!isWidthLessThan375 ? <VoteButton>{props.score}</VoteButton> : <></>}

        <div className="flex w-full flex-col gap-y-[10px]">
          <CommentHeader
            {...headerProps}
            owner={owner}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleReplay={handleReplay}
          />
          <Body
            className={
              isEditSectionOpen
                ? "textarea"
                : "break-words text-[13px] text-[#6f7279]"
            }
            placeholder="Edit..."
            rows={4}
            value={bodyContent}
            onChange={(e: any) => {
              setBodyContent(e.currentTarget.value);
            }}
          >
            {content}
          </Body>

          {isWidthLessThan375 ? (
            <div className="flex items-center">
              <span className="flex-1">
                <VoteButton>{props.score}</VoteButton>
              </span>
              <CommentActions
                owner={owner}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleReplay={handleReplay}
              />
            </div>
          ) : (
            <></>
          )}

          {isEditSectionOpen ? (
            <div className="flex w-full justify-end">
              <button
                className="button bg-[#5358b4] text-[13px]"
                onClick={handleUpdate}
              >
                UPDATE
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {isReplaySectionOpen ? (
        <CommentForm
          type="replay"
          commentId={props.parentId}
          replyingTo={props.user.username}
        />
      ) : (
        <></>
      )}
      {props.replies.length ? (
        <div className="mt-[13px] flex w-full">
          <div className="flex flex-1 justify-center">
            <div className="w-[2px] bg-[#e9eaee]"></div>
          </div>
          <div className="flex flex-col items-end gap-y-[17px]">
            {props.replies.map((replay) => (
              <Comment
                {...replay}
                parentId={props.parentId}
                type="replay"
                replies={[]}
                key={replay.id}
                width={isWidthLessThan375 ? "310px" : "487px"}
              />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      {isModalState.open ? <Modal state={deleteModalState} /> : <></>}
    </div>
  );
}
