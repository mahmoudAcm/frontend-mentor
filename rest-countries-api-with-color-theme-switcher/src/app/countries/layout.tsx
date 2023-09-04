'use client';

import { ReactNode } from 'react';
import { Box, styled } from '@mui/material';
import CountriesFilters from '@/src/components/CountriesFilters';
import CountryDetailsDialog from '@/src/components/CountryDetailsDialog';
import { Container } from '@/src/components/Container';
import CountryDetailsProvider from '@/src/contexts/CountryDetailsContext';

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
      <CountryDetailsProvider>
        <CountryDetailsDialog />
        <Grid>{children}</Grid>
      </CountryDetailsProvider>
    </Container>
  );
}
