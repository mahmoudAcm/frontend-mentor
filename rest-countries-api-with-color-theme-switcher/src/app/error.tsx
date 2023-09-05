'use client';

import Header from '@/src/components/Header';
import { Box, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Error() {
  const router = useRouter();

  return (
    <>
      <Header />
      <Container>
        <Box sx={{ display: 'grid', gap: '20px' }}>
          <Typography
            fontSize='clamp(0.938rem, 0.771rem + 0.833vw, 1.5rem)'
            align='center'
            sx={{ userSelect: 'none', mt: '10vh' }}
          >
            A communication error has occurred with the API.
          </Typography>
          <Button
            size='small'
            onClick={() => {
              router.refresh();
            }}
          >
            Retry
          </Button>
        </Box>
      </Container>
    </>
  );
}
