'use client';

import { Box, styled, Typography } from '@mui/material';
import ThemeSwitcher from '@/src/components/ThemeSwitcher';
import { Container } from '@/src/components/Container';

const AppBar = styled('header')(({ theme }) => ({
  width: '100%',
  background: theme.palette.__mode === 'DARK' ? 'hsl(210, 22%, 22%)' : 'hsl(0, 0%, 100%)',
  '--_shadow-color': theme.palette.__mode === 'DARK' ? 'hsl(205, 28%, 16%)' : 'hsl(0, 0%, 93%)',
  boxShadow: '0px 2.5px 20px var(--_shadow-color)',
  position: 'fixed',
  top: 0,
  zIndex: theme.zIndex.appBar
}));

const Toolbar = styled(Box)(() => ({
  minHeight: 80,
  display: 'flex',
  alignItems: 'center'
}));

//used to be a placeholder for the header as it has position fixed.
const DummyToolbar = styled(Toolbar)('');

const AppBarTitle = styled(Typography)(({ theme }) => ({
  fontSize: 23.25 / theme.typography.htmlFontSize + 'rem',
  fontWeight: 800,
  lineHeight: 32 / 23.25,
  letterSpacing: 0.233,
  pointerEvents: 'none',
  userSelect: 'none',
  [theme.breakpoints.down('sm')]: {
    fontSize: 19 / theme.typography.htmlFontSize + 'rem',
    lineHeight: 26 / 19,
    letterSpacing: -0.855
  }
}));

export default function Header() {
  return (
    <>
      <DummyToolbar />
      <AppBar>
        <Container>
          <Toolbar>
            <AppBarTitle>Where in the worId?</AppBarTitle>
            <ThemeSwitcher />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
