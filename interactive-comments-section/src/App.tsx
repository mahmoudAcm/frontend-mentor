import { useEffect, useRef, useState } from "react";

//components
import Comment from "./comment";
import CommentForm from "./comment-form";

//data
import data from "./data.json";

export type CommentType = typeof data;

function App() {
  const [comments, setComments] = useState<CommentType["comments"]>([]);
  const [currentUser, setCurrentUser] = useState<CommentType["currentUser"]>({
    image: {
      png: "",
      webp: "",
    },
    username: "",
  });

  useEffect(() => {
    setComments(data.comments);
    setCurrentUser(data.currentUser);
  });

  return (
    <div className="flex justify-center">
      <div className="my-[32px] flex max-w-[545px] flex-col gap-y-[16px] [@media_(max-width:375px)]:max-w-[375px]">
        {comments.map((comment) => (
          <Comment {...comment} currentUser={currentUser} key={comment.id} />
        ))}
        <CommentForm type="comment" user={currentUser} />
      </div>
    </div>
  );
}

export default App;
