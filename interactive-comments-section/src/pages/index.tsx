import Head from 'next/head';
import CommentOrReplay from '@/src/components/Comment';
import { Box, Container, styled } from '@mui/material';
import Form from '@/src/components/Comment/Form';
import { useEffect } from 'react';
import Replies from '@/src/components/Comment/Replies';
import DeleteDialog from '@/src/components/Comment/DeleteDialog';
import { useAppDispatch } from '@/src/store';
import { commentsOrRepliesActions } from '@/src/slices/commentsOrReplies';
import useCommentsOrRepliesSelector from '@/src/hooks/useCommentsOrRepliesSelector';

const Layout = styled(Box)(({ theme }) => ({
  display: 'grid',
  maxWidth: '730px',
  gap: '20px',
  justifyContent: 'center',
  margin: '64px auto',
  gridTemplateColumns: '1fr',
  [theme.breakpoints.down('md')]: {
    margin: '32px auto'
  }
}));

export default function Home() {
  const { comments } = useCommentsOrRepliesSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(commentsOrRepliesActions.getComments(1)).then();
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive comments section</title>
        <link rel='shortcut icon' href='/favicon-32x32.png' />
      </Head>
      <Container>
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
              <Replies parentCommentOrReplyId={comment.id} />
            </Box>
          ))}
          <Form type='comment' />
        </Layout>
      </Container>
      <DeleteDialog />
    </>
  );
}
