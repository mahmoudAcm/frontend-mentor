import { Dispatch, SetStateAction } from "react";

//icons
import ReplayIcon from "./icons/replay";
import DeleteIcon from "./icons/delete";
import EditIcon from "./icons/edit";

//types
import { DeleteModalState } from "./delete-modal";

export interface CommentActionsProps {
  owner?: boolean;
  handleReplay: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
}

export default function CommentActions(props: CommentActionsProps) {
  return (
    <div className="flex items-center gap-x-[17px]">
      {!props.owner ? (
        <Button
          icon={
            <ReplayIcon
              width="12"
              height="11"
              className="group-hover:fill-[#c4c6ef]"
            />
          }
          text="Replay"
          className="group text-[#5358b4] hover:text-[#c4c6ef]"
          onClick={props.handleReplay}
        />
      ) : (
        <>
          <Button
            icon={
              <DeleteIcon
                width="12"
                height="11"
                className="group-hover:fill-[#ffb7c0]"
              />
            }
            text="Delete"
            className="group text-[#ED6368] hover:text-[#ffb7c0]"
            onClick={props.handleDelete}
          />
          <Button
            icon={
              <EditIcon
                width="12"
                height="11"
                className="group-hover:fill-[#c4c6ef]"
              />
            }
            text="Edit"
            className="group text-[#5358b4] hover:text-[#c4c6ef]"
            onClick={props.handleEdit}
          />
        </>
      )}
    </div>
  );
}

interface ButtonProps {
  icon: JSX.Element;
  text: string;
  className?: string;
  onClick?: () => void;
}

function Button({ icon, text, className, onClick }: ButtonProps) {
  return (
    <span
      className={[
        "flex cursor-pointer select-none items-center gap-x-[5px] font-bold",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
    >
      {icon}
      {text}
    </span>
  );
}
