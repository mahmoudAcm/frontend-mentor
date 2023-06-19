import { Box, Container, styled } from '@mui/material';
import { ReactNode } from 'react';
import DeleteDialog from '@/src/components/Comment/DeleteDialog';
import Header from '@/src/components/Header';
import AddCommentDialog__unstable from '@/src/components/AddCommentDialog__unstable';
import { useRouter } from 'next/router';
import UserProfileCard from '@/src/components/Header/UserProfileCard';

const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
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

export const LayoutRoot = styled(Box)(({ theme }) => ({
  display: 'grid',
  columnGap: '24px',
  justifyContent: 'center',
  alignItems: 'start',
  margin: '64px auto',
  marginBottom: '40px',
  gridTemplateColumns: '730px 295px',
  position: 'relative',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '730px',
    gridTemplateColumns: '1fr',
    marginTop: '40px',
    marginBottom: '40px'
  }
}));

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <>
      <Header />
      <StyledContainer className={router.route === '/notifications' ? 'notification-container' : undefined}>
        <LayoutRoot className='layout'>
          <Box sx={{ display: 'grid', gap: '20px' }}>{children}</Box>
          <UserProfileCard />
        </LayoutRoot>
        {/*{router.route === '/notifications' ? <></> : <Footer />}*/}
      </StyledContainer>
      <DeleteDialog />
      <AddCommentDialog__unstable />
      {/*<Box*/}
      {/*  sx={{*/}
      {/*    position: 'fixed',*/}
      {/*    inset: 0,*/}
      {/*    backgroundImage: 'url(/images/illiesteration/bg.svg)',*/}
      {/*    backgroundSize: 'cover',*/}
      {/*    backgroundPosition: 'center',*/}
      {/*    zIndex: -1*/}
      {/*  }}*/}
      {/*></Box>*/}
    </>
  );
}
