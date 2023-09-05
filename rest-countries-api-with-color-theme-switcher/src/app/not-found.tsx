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
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            We're sorry, but the page you are looking for could not be found.
          </Typography>
          <Button
            size='small'
            onClick={() => {
              router.replace('/countries');
            }}
          >
            Go to home
          </Button>
        </Box>
      </Container>
    </>
  );
}
