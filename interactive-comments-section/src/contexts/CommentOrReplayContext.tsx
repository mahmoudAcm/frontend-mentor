import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CommentOrReplayProps } from '@/src/components/Comment/CommentOrReplay';

type State = CommentOrReplayProps & {
  owner: boolean;
};

export const CommentOrReplayContext = createContext<
  | null
  | (State & {
      editing: boolean;
      openForm: boolean;
      readMore: boolean;
      parentId?: string;
      openEdit: () => void;
      closeEdit: () => void;
      setContent: Dispatch<string>;
      setFormOpening: Dispatch<SetStateAction<boolean>>;
      setReadMore: Dispatch<SetStateAction<boolean>>;
    })
>(null);

const shouldShowReadMoreButton = (content: string) => (content.match(/(.{1,20})|(\n)/gi)?.length ?? 0) > 30;

export function CommentOrReplayProvider({ children, value }: { children: JSX.Element; value: State }) {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(value.content);
  const [openForm, setFormOpening] = useState(false);
  const [readMore, setReadMore] = useState(shouldShowReadMoreButton(value.content));

  //check content to show read more button if needed
  useEffect(() => {
    setReadMore(shouldShowReadMoreButton(content));
  }, [content]);

  const openEdit = () => {
    setEditing(true);
  };

  const closeEdit = () => {
    setEditing(false);
  };

  //to update the content when the socket edit events occurs
  useEffect(() => {
    setContent(value.content);
  }, [value.content]);

  return (
    <CommentOrReplayContext.Provider
      value={{
        ...value,
        editing,
        openEdit,
        parentId: [value.parentCommentId, value.parentReplyId].filter(Boolean).join(''),
        closeEdit,
        content,
        setContent,
        openForm,
        setFormOpening,
        readMore,
        setReadMore
      }}
    >
      {children}
    </CommentOrReplayContext.Provider>
  );
}
