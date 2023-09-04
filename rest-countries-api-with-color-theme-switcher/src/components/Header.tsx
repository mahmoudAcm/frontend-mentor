'use client';

import { Box, styled, Typography } from '@mui/material';
import ThemeSwitcher from '@/src/components/ThemeSwitcher';

const AppBar = styled('header')(({ theme }) => ({
  background: theme.palette.__mode === 'DARK' ? 'hsl(210, 22%, 22%)' : 'hsl(0, 0%, 100%)',
  '--_shadow-color': theme.palette.__mode === 'DARK' ? 'hsl(205, 28%, 16%)' : 'hsl(0, 0%, 93%)',
  boxShadow: '0px 2.5px 20px var(--_shadow-color)'
}));

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

const Toolbar = styled(Box)(() => ({
  minHeight: 80,
  display: 'flex',
  alignItems: 'center'
}));

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
    <AppBar>
      <Container>
        <Toolbar>
          <AppBarTitle>Where in the worId?</AppBarTitle>
          <ThemeSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
