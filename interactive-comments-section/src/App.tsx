import { useEffect, useRef, useState } from "react";

//components
import Comment from "./comment";
import CommentForm from "./comment-form";

//context
import { useData } from "./context";

function App() {
  const [isPageLoading, setPageLoading] = useState(true);
  const { comments } = useData();

  useEffect(() => {
    window.addEventListener("load", () => {
      document.fonts.ready.then(() => {
        setPageLoading(false);
      });
    });
  });

  return (
    <div className="flex justify-center">
      <div
        className={[
          "loader fixed inset-0 z-[1000] h-full w-full bg-[#f5f6fa]",
          !isPageLoading ? "fade-out-loader" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      ></div>
      <div className="my-[32px] flex max-w-[545px] flex-col gap-y-[16px] [@media_(max-width:375px)]:max-w-[375px]">
        {comments.map((comment) => (
          <Comment
            {...comment}
            key={comment.id}
            parentId={comment.id}
            type="comment"
          />
        ))}
        <CommentForm type="comment" />
      </div>
    </div>
  );
}

export default App;
