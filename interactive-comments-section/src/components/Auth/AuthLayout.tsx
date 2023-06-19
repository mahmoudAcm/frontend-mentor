import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: '30px',
  paddingBottom: '30px',
  '&.demo': {
    [theme.breakpoints.down('md')]: {
      padding: 0
    }
  }
}));

export default function AuthLayout({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          backgroundImage: 'url(/images/illiesteration/bg.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      ></Box>
      <StyledContainer className={className}>
        <Box
          sx={{
            display: 'grid',
            minHeight: '100vh',
            alignItems: 'center'
          }}
        >
          {children}
        </Box>
      </StyledContainer>
    </>
  );
}
