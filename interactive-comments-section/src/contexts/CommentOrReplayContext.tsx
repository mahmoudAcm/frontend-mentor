import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { CommentOrReplayProps } from '@/src/components/Comment/CommentOrReplay';

type State = CommentOrReplayProps & { owner: boolean };

export const CommentOrReplayContext = createContext<
  | null
  | (State & {
      editing: boolean;
      openForm: boolean;
      setEditing: Dispatch<SetStateAction<boolean>>;
      setContent: Dispatch<string>;
      setFormOpening: Dispatch<SetStateAction<boolean>>;
    })
>(null);

export function CommentOrReplayProvider({ children, value }: { children: JSX.Element; value: State }) {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(value.content);
  const [openForm, setFormOpening] = useState(false);

  return (
    <CommentOrReplayContext.Provider
      value={{ ...value, editing, setEditing, content, setContent, openForm, setFormOpening }}
    >
      {children}
    </CommentOrReplayContext.Provider>
  );
}
