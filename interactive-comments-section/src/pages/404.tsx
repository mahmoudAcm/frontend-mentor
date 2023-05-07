import { Box, Button, styled, Typography } from '@mui/material';
import Link from 'next/link';
import Head from 'next/head';

const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}));

const Img = styled('img')(({ theme }) => ({
  height: 500,
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(20)
  }
}));

export default function Error404() {
  return (
    <>
      <Head>
        <title>Oops! 😖</title>
      </Head>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography variant='h4' sx={{ mb: 1.5 }}>
            Page Not Found :(
          </Typography>
          <Typography sx={{ mb: 6, color: 'text.secondary' }}>
            Oops! 😖 The requested URL was not found on this server.
          </Typography>
          <Button href='/' component={Link} variant='contained'>
            Back to Home
          </Button>
        </BoxWrapper>
        <Img height='1000' alt='error-illustration' src='/images/404.png' />
      </Box>
    </>
  );
}
