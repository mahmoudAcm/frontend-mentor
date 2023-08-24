import Header from '@/src/app/Header';
import { Chip, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Header className='not-found' />
      <Container sx={{ display: 'flex' }}>
        <Chip
          sx={{ mt: '10vh', mx: 'auto' }}
          label={
            <Typography>
              Pages is under development. <Link href='/products/1'>working page</Link>
            </Typography>
          }
        />
      </Container>
    </>
  );
}
