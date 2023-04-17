import { Box, styled, Typography } from '@mui/material';

const ScreenRoot = styled(Box)(({ theme }) => ({
  width: '538px',
  height: '120px',
  background: 'var(--bg-screen)',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  overflow: 'auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '89px'
  }
}));

const Result = styled(Typography)(({ theme }) => ({
  fontSize: '2.9375rem',
  lineHeight: 1,
  fontWeight: theme.typography.fontWeightBold,
  padding: '24px 31px',
  '&::selection': {
    background: theme.palette.background.paper,
    color: theme.palette.getContrastText(theme.palette.background.paper)
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.125rem'
  }
}));

function formatResult(result: string) {
  if (!result) console.warn('invalid number');
  return result.replace(/\d{3}/g, match => match + ',').replace(/,$/, '');
}

export default function Screen() {
  return (
    <ScreenRoot>
      <Result variant='h1'>{formatResult('399981')}</Result>
    </ScreenRoot>
  );
}
