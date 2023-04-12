import { Dispatch, SetStateAction } from "react";

export type DeleteModalState = [
  { open: boolean; save: boolean },
  Dispatch<SetStateAction<{ open: boolean; save: boolean }>>
];

interface ModalProps {
  state: DeleteModalState;
}

export default function Modal(props: ModalProps) {
  const handleClose = (save: boolean) => () => {
    props.state[1]({ open: false, save });
  };
  return (
    <dialog className="fixed inset-0 z-20 flex h-full w-full select-none items-center justify-center bg-[rgba(0,_0,_0,_.5)]">
      <div className="flex min-h-[174px] w-[271px] flex-col gap-y-[7px] rounded-md bg-white p-[22px] [@media_(width<=375px)]:w-full">
        <h3 className="font-bold text-[#374151]">Delete comment</h3>
        <p className="mb-[5px] text-left text-[11px] text-[gray] [@media_(width<=375px)]:text-[16px]">
          {`Are you sure you want to delete this
          comment? This will remove the comment 
          and can't be undone.`}
        </p>
        <div className="flex gap-[10px] text-[11px] [@media_(width<=375px)]:text-[12px]">
          <button
            className="button w-[109px] bg-[#69717e] [@media_(max-width:375px)]:w-full"
            onClick={handleClose(false)}
          >
            No, Cancel
          </button>
          <button
            className="button w-[109px] bg-[#ee6368] [@media_(width<=375px)]:w-full"
            onClick={handleClose(true)}
          >
            Yes Delete
          </button>
        </div>
      </div>
    </dialog>
  );
}
