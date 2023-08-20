//This code made with gpt and I made small changes to it

import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';

const NotFoundRoot = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: hsl(0, 0%, 98%);
  color: #333;
`;

const StyledText = styled(Typography)`
  && {
    font-size: clamp(0.938rem, 0.863rem + 0.375vw, 1.2rem);
  }
`;

const StyledLink = styled(Link)`
  color: #3498db;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NotFound = () => {
  return (
    <NotFoundRoot>
      <Container>
        <StyledText variant='body1' align='center'>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          The page you're looking for doesn't exist.
          <br />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Let's get you back <StyledLink href='/todos'>todos</StyledLink>.
        </StyledText>
      </Container>
    </NotFoundRoot>
  );
};

export default NotFound;
