import Head from 'next/head';
import CommentOrReplay from '@/src/components/Comment';
import { Box } from '@mui/material';
import Form from '@/src/components/Comment/Form';
import { useEffect } from 'react';
import Replies from '@/src/components/Comment/Replies';
import { useAppDispatch } from '@/src/store';
import { commentsOrRepliesActions } from '@/src/slices/commentsOrReplies';
import useCommentsOrRepliesSelector from '@/src/hooks/useCommentsOrRepliesSelector';
import Layout from '@/src/components/Layout';

export default function Home() {
  const { comments } = useCommentsOrRepliesSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(commentsOrRepliesActions.getComments()).then();
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive comments section</title>
        <link rel='shortcut icon' href='/favicon-32x32.png' />
      </Head>
      <Layout>
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
      </Layout>
    </>
  );
}
