import Head from 'next/head';
import CommentOrReplay from '@/src/components/Comment';
import { Box, Container, Portal, styled } from '@mui/material';
import Form from '@/src/components/Comment/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Comment as CommentType } from '../types';
import Replies from '@/src/components/Comment/Replies';
import DeleteDialog from '@/src/components/Comment/DeleteDialog';

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
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    axios.get<CommentType[]>('/api/comments').then(resp => {
      setComments(resp.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive comments section</title>
        <link rel='shortcut icon' href='/favicon-32x32.png' />
      </Head>
      <Container>
        <Layout>
          {comments.map((comment, idx) => (
            <Box key={idx}>
              <CommentOrReplay
                type='comment'
                content={comment.content}
                createdAt={comment.createdAt}
                username={comment.user.username}
                avatar={comment.user.image}
                votes={comment.score}
              />
              <Replies parentComment={comment.id} />
            </Box>
          ))}
          <Form type='comment' />
        </Layout>
      </Container>
      <DeleteDialog />
    </>
  );
}
