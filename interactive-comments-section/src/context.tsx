import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

//data
import data from "./data.json";

const context = createContext({
  vote: (cb: (val: boolean) => boolean) => {},
  addComment: (content: string) => {},
  addReplay: (id: string, content: string, replyingTo: string) => {},
  editCommentOrReplay: (
    updateObj: {
      content?: string;
      score?: number;
    },
    id: string,
    type: "comment" | "replay",
    replayId?: string
  ) => {},
  removeCommentOrReplay: (
    id: string,
    type: "comment" | "replay",
    replayId?: string
  ) => {},
  ...data,
});
export type DataType = typeof data;

export const useData = () => {
  return useContext(context);
};

export default function DataProvider({ children }: { children: ReactNode }) {
  const [internalData, setData] = useState(data);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    setData((data) => ({
      currentUser: data.currentUser,
      comments: data.comments.sort((a, b) => b.score - a.score),
    }));
  }, [voted]);

  const addComment = (content: string) => {
    const time = Date.now();
    setData((data) => ({
      currentUser: data.currentUser,
      comments: data.comments.concat({
        id: crypto.randomUUID(),
        content,
        createdAt: time,
        replies: [],
        user: data.currentUser,
        score: 0,
      }),
    }));
  };

  const addReplay = (
    commentId: string,
    content: string,
    replyingTo: string
  ) => {
    const time = Date.now();

    const addInnerReplay = (comments: DataType["comments"]) => {
      return comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: comment.replies.concat({
              replyingTo,
              id: crypto.randomUUID(),
              content,
              createdAt: time,
              user: data.currentUser,
              score: 0,
            }),
          };
        }
        return comment;
      });
    };

    setData((data) => ({
      currentUser: data.currentUser,
      comments: addInnerReplay(data.comments),
    }));
  };

  const removeCommentOrReplay = (
    id: string,
    type: "comment" | "replay",
    replayId?: string
  ) => {
    if (type === "comment") {
      setData((data) => ({
        currentUser: data.currentUser,
        comments: data.comments.filter((comment) => comment.id !== id),
      }));
    } else {
      setData((data) => ({
        currentUser: data.currentUser,
        comments: data.comments.map((comment) => {
          if (comment.id === id) {
            return {
              ...comment,
              replies: comment.replies.filter(
                (replay) => replay.id !== replayId
              ),
            };
          }
          return comment;
        }),
      }));
    }
  };

  /**
   * @param id is the comment id or the parent comment id for a replay
   */
  const editCommentOrReplay = (
    updateObj: {
      content?: string;
      score?: number;
    },
    id: string,
    type: "comment" | "replay",
    replayId?: string
  ) => {
    if (type === "comment") {
      setData((data) => ({
        currentUser: data.currentUser,
        comments: data.comments.map((comment) => {
          if (comment.id === id) {
            return {
              ...comment,
              ...updateObj,
            };
          }
          return comment;
        }),
      }));
    } else {
      setData((data) => ({
        currentUser: data.currentUser,
        comments: data.comments.map((comment) => {
          if (comment.id === id) {
            return {
              ...comment,
              replies: comment.replies.map((replay) => {
                if (replay.id === replayId!) {
                  return {
                    ...replay,
                    ...updateObj,
                  };
                }
                return replay;
              }),
            };
          }
          return comment;
        }),
      }));
    }
  };

  return (
    <context.Provider
      value={{
        vote: setVoted,
        addComment,
        addReplay,
        editCommentOrReplay,
        removeCommentOrReplay,
        ...internalData,
      }}
    >
      {children}
    </context.Provider>
  );
}
