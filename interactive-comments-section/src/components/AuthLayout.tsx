import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import Head from 'next/head';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon-32x32.png' />
      </Head>
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
    </>
  );
}
