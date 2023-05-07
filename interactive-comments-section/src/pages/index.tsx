import Head from 'next/head';
import CommentOrReplay from '@/src/components/Comment';
import { Box } from '@mui/material';
import Form from '@/src/components/Comment/Form';
import { useEffect } from 'react';
import Replies from '@/src/components/Comment/Replies';
import { useAppDispatch } from '@/src/store';
import { commentsOrRepliesActions } from '@/src/slices/commentsOrReplies';
import useCommentsOrRepliesSelector from '@/src/hooks/useCommentsOrRepliesSelector';

export default function Home() {
  const { comments } = useCommentsOrRepliesSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!comments.length) dispatch(commentsOrRepliesActions.getComments()).then();
  }, [comments, dispatch]);

  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive comments section</title>
      </Head>
      {comments.map(comment => (
        <Box key={comment.id}>
          <CommentOrReplay
            type='comment'
            content={comment.content}
            createdAt={comment.createdAt}
            username={comment.user.username}
            avatar={comment.user.image}
            votes={comment.score}
          />
          <Replies parentCommentOrReplyId={comment.id} lvl={1} />
        </Box>
      ))}
      <Form type='comment' />
    </>
  );
}
