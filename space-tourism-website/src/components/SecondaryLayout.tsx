import { Box, BoxProps, Container, styled, Typography } from '@mui/material';
import { ReactNode } from 'react';
import clsx from 'clsx';

const Title = styled(Typography)(({ theme }) => ({
  '& .number': {
    fontWeight: 700,
    marginRight: '28px',
    color: 'white',
    opacity: 0.25
  },
  lineHeight: 1.2,
  [theme.breakpoints.down('lg')]: {
    '& .number': {
      marginRight: '19px'
    },
    marginLeft: '14.5px',
    fontSize: '1.25rem',
    letterSpacing: '3.38px'
  },
  [theme.breakpoints.down('sm')]: {
    ...theme.typography.nav,
    marginLeft: 0,
    '& .number': {
      marginRight: '18px'
    }
  }
}));

export function SecondaryLayoutMainTitle({ num, children }: { num: string; children: ReactNode }) {
  return (
    <Title variant='h5' className='main-title'>
      <span className='number'>{num}</span>
      <span>{children}</span>
    </Title>
  );
}

const SecondaryLayout = styled(function SecondaryLayout({ children, ...rest }: BoxProps) {
  return (
    <Container>
      <Box
        {...rest}
        className={clsx({
          'flex-col': true,
          [rest.className ?? '']: Boolean(rest.className)
        })}
      >
        {children}
      </Box>
    </Container>
  );
})(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: '202px',
  [theme.breakpoints.down('lg')]: {
    paddingTop: '136px'
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '88px',
    marginLeft: 0
  }
}));

export default SecondaryLayout;
