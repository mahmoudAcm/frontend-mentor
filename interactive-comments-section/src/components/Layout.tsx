import { Box, Container, styled } from '@mui/material';
import { ReactNode } from 'react';
import DeleteDialog from '@/src/components/Comment/DeleteDialog';
import Header from '@/src/components/Header';
import AddCommentDialog__unstable from '@/src/components/AddCommentDialog__unstable';
import Footer from '@/src/components/Footer';

const LayoutRoot = styled(Box)(({ theme }) => ({
  display: 'grid',
  maxWidth: '730px',
  gap: '20px',
  justifyContent: 'center',
  margin: '64px auto',
  marginBottom: '40px',
  gridTemplateColumns: '1fr',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    margin: '32px auto',
    marginBottom: '40px'
  }
}));

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
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
