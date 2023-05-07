import { Box, Container, styled } from '@mui/material';
import { ReactNode } from 'react';
import DeleteDialog from '@/src/components/Comment/DeleteDialog';
import Header from '@/src/components/Header';
import AddCommentDialog__unstable from '@/src/components/AddCommentDialog__unstable';
import Head from 'next/head';
import Footer from '@/src/components/Footer';

const LayoutRoot = styled(Box)(({ theme }) => ({
  display: 'grid',
  maxWidth: '730px',
  gap: '20px',
  justifyContent: 'center',
  margin: 'calc(64px + 64px) auto',
  marginBottom: '40px',
  gridTemplateColumns: '1fr',
  [theme.breakpoints.down('md')]: {
    margin: 'calc(32px + 64px) auto',
    marginBottom: '40px'
  }
}));

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon-32x32.png' />
      </Head>
      <Header />
      <Container>
        <LayoutRoot>{children}</LayoutRoot>
        <Footer />
      </Container>
      <DeleteDialog />
      <AddCommentDialog__unstable />
    </>
  );
}
