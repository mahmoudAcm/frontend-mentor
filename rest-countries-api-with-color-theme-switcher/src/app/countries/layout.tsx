'use client';

import { ReactNode } from 'react';
import { Box, styled } from '@mui/material';
import CountriesFilters from '@/src/components/CountriesFilters';

const Container = styled(Box)(({ theme }) => ({
  '--_px': '32px',
  maxWidth: 'calc(1280px + 2 * var(--_px))',
  margin: 'auto',
  paddingLeft: 'var(--_px)',
  paddingRight: 'var(--_px)',
  [theme.breakpoints.down('sm')]: {
    '--_px': '16px'
  }
}));

const Grid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(264px, 1fr))',
  gap: 74,
  marginBottom: 45,
  [theme.breakpoints.down(657)]: {
    gridTemplateColumns: '328px',
    justifyContent: 'center'
  },
  [theme.breakpoints.down(350)]: {
    gridTemplateColumns: '1fr'
  }
}));

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <CountriesFilters />
      <Grid>{children}</Grid>
    </Container>
  );
}
