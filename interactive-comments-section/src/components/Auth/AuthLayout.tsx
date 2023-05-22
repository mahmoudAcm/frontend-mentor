import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Box
        sx={{
          display: 'grid',
          minHeight: '100vh',
          alignItems: 'center',
          py: '30px'
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
