'use client';

import { ReactNode } from 'react';
import { Box, styled } from '@mui/material';

const Container = styled(Box)(() => ({
  maxWidth: 1312,
  margin: 'auto',
  paddingLeft: 16,
  paddingRight: 16
}));

const Grid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(264px, 1fr))',
  gap: 74,
  marginTop: 48,
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
      <Grid>{children}</Grid>
    </Container>
  );
}
