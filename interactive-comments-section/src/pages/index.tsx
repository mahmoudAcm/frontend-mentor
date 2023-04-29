import Head from 'next/head';
import Comment from '@/src/components/Comment';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive comments section</title>
        <link rel='shortcut icon' href='/favicon-32x32.png' />
      </Head>
      <Container>
        <Comment />
      </Container>
    </>
  );
}
