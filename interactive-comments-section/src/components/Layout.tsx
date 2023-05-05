import { Box, Container, styled } from '@mui/material';
import { ReactNode } from 'react';
import DeleteDialog from '@/src/components/Comment/DeleteDialog';

const LayoutRoot = styled(Box)(({ theme }) => ({
  display: 'grid',
  maxWidth: '730px',
  gap: '20px',
  justifyContent: 'center',
  margin: 'calc(64px + 64px) auto',
  gridTemplateColumns: '1fr',
  [theme.breakpoints.down('md')]: {
    margin: 'calc(32px + 64px) auto'
  }
}));

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Container>
        <LayoutRoot>{children}</LayoutRoot>
      </Container>
      <DeleteDialog />
    </>
  );
}
