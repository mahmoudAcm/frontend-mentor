import { useState } from "react";

//components
import VoteButton from "./vote-btn";
import CommentHeader from "./comment-header";
import CommentForm from "./comment-form";
import Modal from "./delete-modal";

//types
import { CommentType } from "./App";

//hooks
import useMaxWidth from "./hooks/useMaxWidth";
import CommentActions from "./comment-actions";

type CommentProps = CommentType["comments"][0] & {
  currentUser: CommentType["currentUser"];
  width?: string | number;
};

export default function Comment(props: CommentProps) {
  const { content, ...headerProps } = props;

  const isWidthLessThan375 = useMaxWidth(375);
  console.log(isWidthLessThan375);

  /** modal state */
  const deleteModalState = useState({ open: false, save: false });
  const [isModalState] = deleteModalState;

  const [isReplaySectionOpen, setReplaySectionOpening] = useState(false);
  const [isEditSectionOpen, setEditSectionOpening] = useState(false);

  const Body = isEditSectionOpen ? "textarea" : "p";

  const owner = props.currentUser.username === props.user.username;

  const handleReplay = () => {
    setReplaySectionOpening((prev) => !prev);
  };

  const handleEdit = () => {
    setEditSectionOpening(true);
  };

  const handleDelete = () => {
    deleteModalState[1]({ open: true, save: false });
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
                onClick={() => {
                  setEditSectionOpening(false);
                }}
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
        <CommentForm type="replay" user={props.currentUser} />
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
                replies={[]}
                currentUser={props.currentUser}
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
