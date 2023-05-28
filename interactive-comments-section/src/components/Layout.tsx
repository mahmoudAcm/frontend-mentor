import { Box, Container, styled } from '@mui/material';
import { ReactNode } from 'react';
import DeleteDialog from '@/src/components/Comment/DeleteDialog';
import Header from '@/src/components/Header';
import AddCommentDialog__unstable from '@/src/components/AddCommentDialog__unstable';
import Footer from '@/src/components/Footer';
import { useRouter } from 'next/router';

const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    '&.notification-container': {
      paddingLeft: 0,
      paddingRight: 0,
      '& .layout': {
        marginTop: 0,
        marginBottom: 0,
        maxWidth: '100%'
      }
    }
  }
}));

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
  const router = useRouter();

  return (
    <>
      <Header />
      <StyledContainer className={router.route === '/notifications' ? 'notification-container' : undefined}>
        <LayoutRoot className='layout'>{children}</LayoutRoot>
        {router.route === '/notifications' ? <></> : <Footer />}
      </StyledContainer>
      <DeleteDialog />
      <AddCommentDialog__unstable />
    </>
  );
}
