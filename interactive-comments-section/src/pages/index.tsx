import Head from 'next/head';
import Comment from '@/src/components/Comment';
import { Container } from '@mui/material';
import Form from '@/src/components/Comment/Form';

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive comments section</title>
        <link rel='shortcut icon' href='/favicon-32x32.png' />
      </Head>
      <Container>
        <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
          <Comment />
          <Form type='comment' />
        </div>
      </Container>
    </>
  );
}
