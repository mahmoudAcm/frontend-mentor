import { Box, Container, styled } from '@mui/material';
import { ReactNode } from 'react';

const LayoutRoot = styled(Box)(({ theme }) => ({
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

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <LayoutRoot>{children}</LayoutRoot>
    </Container>
  );
}
