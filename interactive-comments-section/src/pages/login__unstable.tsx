import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '@/src/components/Footer';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Link,
  Paper,
  Typography
} from '@mui/material';
import { Poppins } from 'next/font/google';
import InputBase from '@mui/material/InputBase';
import { Facebook, Google } from '@mui/icons-material';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

const poppinsFont = Poppins({
  weight: ['400', '700'],
  subsets: ['devanagari', 'latin', 'latin-ext'],
  display: 'swap'
});

const Span = styled('span')(() => ({
  padding: '15px 15px 10px',
  border: '1px solid hsla(349, 5%, 86%, 1)',
  borderRadius: '14px',
  cursor: 'pointer'
}));

function Login__unstable() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | login</title>
      </Head>
      <Container>
        <Card
          sx={{
            width: 'min(100%, 375px)',
            textAlign: 'center',
            margin: '64px auto'
          }}
          elevation={2}
        >
          <CardContent>
            <Box sx={{ mt: '40px' }}>
              <Typography className={poppinsFont.className} sx={{ fontWeight: 400 }}>
                Hey there,
              </Typography>
              <Typography className={poppinsFont.className} sx={{ fontWeight: 700, fontSize: '1.25rem' }}>
                Welcome Back
              </Typography>
            </Box>
            <Box
              component='form'
              sx={{
                ...poppinsFont.style,
                mt: '30px',
                '& *::placeholder': {
                  color: 'hsla(349, 5%, 66%, 1)',
                  fontWeight: 400
                }
              }}
            >
              <InputBase
                placeholder='Email'
                sx={{ background: 'hsla(180, 7%, 97%, 1)', p: '7.5px 15px', borderRadius: '14px' }}
                fullWidth
              />
              <InputBase
                placeholder='Password'
                sx={{
                  background: 'hsla(180, 7%, 97%, 1)',
                  mt: '15px',
                  p: '7.5px 15px',
                  borderRadius: '14px',
                  mb: '10px'
                }}
                fullWidth
              />
              <Link href='' sx={{ ...poppinsFont.style, fontWeight: 500, fontSize: '0.75rem' }}>
                Forgot your password?
              </Link>
            </Box>
            <Button
              fullWidth
              sx={{
                mt: '200px',
                background: 'linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%)',
                color: 'white',
                borderRadius: 99,
                p: '9px'
              }}
            >
              Login
            </Button>
            {/*<Box*/}
            {/*  sx={{*/}
            {/*    position: 'relative',*/}
            {/*    fontWeight: 400,*/}
            {/*    mt: '20px'*/}
            {/*  }}*/}
            {/*>*/}
            {/*  or*/}
            {/*</Box>*/}
            {/*<Box sx={{ display: 'flex', gap: '29px', justifyContent: 'center', mt: '20px' }}>*/}
            {/*  <Span>*/}
            {/*    <Image src='/images/icon-google.svg' alt='google icon' width='20' height='20' priority />*/}
            {/*  </Span>*/}
            {/*  <Span>*/}
            {/*    <Image src='/images/icon-facebook.svg' alt='facebook icon' width='20' height='20' priority />*/}
            {/*  </Span>*/}
            {/*</Box>*/}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

Login__unstable.getLayout = (page: ReactNode) => (
  <>
    {page}
    <Footer />
  </>
);

export default Login__unstable;
