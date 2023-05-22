import { Box, Button, styled, Typography } from '@mui/material';

export const SecondaryLayout = styled(Box)(({ theme }) => ({
  marginTop: '-2px',
  [theme.breakpoints.down('md')]: {
    marginTop: 0,
    paddingTop: '12px'
  }
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: '12px',
  fontSize: '1.880625rem',
  lineHeight: 1.50333333,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.215625rem',
    lineHeight: 1.182519280205
  }
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: '12px 36px',
  textTransform: 'none',
  background: '#7869CE',
  [theme.breakpoints.down('md')]: {
    padding: '11px 31px',
    fontSize: '0.834375rem'
  }
}));
