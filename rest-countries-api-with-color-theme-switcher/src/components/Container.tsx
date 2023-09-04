import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  '--_px': '32px',
  maxWidth: 'calc(1280px + 2 * var(--_px))',
  margin: 'auto',
  paddingLeft: 'var(--_px)',
  paddingRight: 'var(--_px)',
  [theme.breakpoints.down('sm')]: {
    '--_px': '16px'
  }
}));
