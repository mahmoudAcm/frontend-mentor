import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: '30px',
  paddingBottom: '30px',
  '&.demo': {
    [theme.breakpoints.down('md')]: {
      padding: 0
    }
  },
  '& img': {
    userSelect: 'none'
  }
}));

export default function AuthLayout({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <>
      <StyledContainer className={className}>
        <Box
          sx={{
            display: 'grid',
            minHeight: '100vh',
            alignItems: 'center'
          }}
        >
          <Image
            src='/images/illiesteration/bg.svg'
            width='1440'
            height='560'
            alt='background pattern'
            style={{
              position: 'fixed',
              zIndex: -1,
              inset: 0,
              width: '100%',
              height: '100%'
            }}
            priority
          />
          {children}
        </Box>
      </StyledContainer>
    </>
  );
}
