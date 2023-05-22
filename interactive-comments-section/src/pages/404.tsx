import { Box, styled, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SecondaryLayout, StyledButton, Title } from '@/src/components/SecondaryLayout';

const Img = styled('img')(({ theme }) => ({
  height: 500,
  marginTop: '74px',
  [theme.breakpoints.down('lg')]: {
    height: 450
  },
  [theme.breakpoints.down('md')]: {
    height: 400,
    marginTop: '67px'
  }
}));

export default function Error404() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Frontend Mentor | Oops! 😖</title>
      </Head>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <SecondaryLayout>
          <Title variant='h1'>Page Not Found :(</Title>
          <Typography
            sx={{
              mb: '33px',
              color: 'text.secondary',
              fontWeight: 400,
              fontSize: '1.0625rem'
            }}
          >
            Oops! 😖 The requested URL was not found on this server.
          </Typography>
          <StyledButton
            onClick={async () => {
              await router.push('/');
            }}
            variant='contained'
          >
            Back to home
          </StyledButton>
        </SecondaryLayout>
        <Img height='1000' alt='error-illustration' src='/images/404.png' />
      </Box>
    </>
  );
}
