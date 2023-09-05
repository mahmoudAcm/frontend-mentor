'use client';

import { Box, Chip, Typography } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';

export default function NoResults() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filter = searchParams.get('filter') ?? '';

  const clearQuery = () => {
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.delete('filter');
    urlSearchParams.delete('limit');
    const search = urlSearchParams.toString();
    router.replace('?' + search);
  };

  return (
    <>
      <Box
        sx={{
          gridColumn: '1 / -1',
          display: 'grid',
          gap: '20px'
        }}
      >
        <Typography
          variant='h6'
          align='center'
          sx={{
            fontSize: 'clamp(0.813rem, 0.72rem + 0.463vw, 1.125rem)',
            fontWeight: 500,
            lineHeight: 2,
            mx: 'auto',
            userSelect: 'none'
          }}
        >
          The query
          <Chip
            label={filter}
            sx={{ mx: '10px', maxWidth: { xs: '90px', sm: '220px', lg: '320px' } }}
            variant='outlined'
            onDelete={clearQuery}
          />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          didn't match any country.
        </Typography>
      </Box>
    </>
  );
}
