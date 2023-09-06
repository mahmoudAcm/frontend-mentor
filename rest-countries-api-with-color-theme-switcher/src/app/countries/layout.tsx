'use client';

import { ReactNode, useState } from 'react';
import { alpha, Box, Fab, styled, useScrollTrigger } from '@mui/material';
import CountriesFilters from '@/src/components/CountriesFilters';
import CountryDetailsDialog from '@/src/components/CountryDetailsDialog';
import { Container } from '@/src/components/Container';
import CountryDetailsProvider from '@/src/contexts/CountryDetailsContext';
import CountriesLoadingSkeleton from '@/src/components/CountriesLoadingSkeleton';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

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

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: '30px',
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: theme.transitions.create(['color', 'transform']),
  '&:hover': {
    background: alpha(theme.palette.background.paper, 0.5)
  },
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  }
}));

export default function Layout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const trigger = useScrollTrigger({
    threshold: 100
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: document.body.clientHeight,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container>
      <CountriesFilters onChange={setLoading} />
      <CountryDetailsProvider>
        <CountryDetailsDialog />
        <Grid>{loading ? <CountriesLoadingSkeleton /> : children} </Grid>
      </CountryDetailsProvider>
      <StyledFab sx={{ left: '30px', transform: trigger ? 'translateY(100px)' : undefined }} onClick={scrollToTop}>
        <KeyboardDoubleArrowDownIcon />
      </StyledFab>
      <StyledFab sx={{ right: '30px', transform: !trigger ? 'translateY(100px)' : undefined }} onClick={scrollToBottom}>
        <KeyboardDoubleArrowUpIcon />
      </StyledFab>
    </Container>
  );
}
