'use client';

import { ReactNode } from 'react';
import { Container, styled } from '@mui/material';
import Header from '@/src/app/Header';

const Main = styled('main')(({ theme }) => ({
  marginTop: 90,
  marginBottom: 90,
  [theme.breakpoints.down('lg')]: {
    marginTop: 0,
    marginBottom: 88
  }
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: 'calc(1015px + 24px * 2) !important',
  display: 'flex',
  gap: 125,
  [theme.breakpoints.down('lg')]: {
    maxWidth: '100% !important',
    flexDirection: 'column',
    gap: 20,
    paddingLeft: 0,
    paddingRight: 0
  }
}));

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Main>
        <StyledContainer>{children}</StyledContainer>
      </Main>
    </>
  );
}
