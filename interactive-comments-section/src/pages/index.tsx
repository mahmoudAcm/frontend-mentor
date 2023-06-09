import { ReactNode } from 'react';
import Home from '@/src/components/LandingPage/Home';
import { Box } from '@mui/material';
import Features from '@/src/components/LandingPage/Features';
import Benefits from '@/src/components/LandingPage/Benefits';
import Footer from '@/src/components/LandingPage/Footer';
import Head from 'next/head';

function LandingPage() {
  return (
    <>
      <Head>
        <title>Interactive comments section</title>
      </Head>
      <Home />
      <Features />
      <Benefits />
      <Footer />
    </>
  );
}

LandingPage.getLayout = (page: ReactNode) => (
  <Box
    sx={{
      minHeight: '800px',
      position: 'relative',
      background: '#111827',
      isolation: 'isolate',
      '& img': {
        userSelect: 'none'
      },
      '& *::selection': {
        background: 'hsla(234,88%,73%,0.72)',
        color: 'white'
      }
    }}
  >
    {page}
  </Box>
);

export default LandingPage;
