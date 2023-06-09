import { StyledContainer } from '@/src/components/LandingPage/Shared';
import { Box, Typography } from '@mui/material';
import Facebook from '@/src/icons/social/Facebook';
import Instagram from '@/src/icons/social/Instagram';
import Twitter from '@/src/icons/social/Twitter';
import Github from '@/src/icons/social/Github';
import Youtube from '@/src/icons/social/Youtube';
import { styled } from '@mui/material/styles';

const FooterWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  borderTop: '1px solid hsla(0, 0%, 100%, 0.1)',
  paddingTop: '35px',
  paddingBottom: '35px',
  maxWidth: '1200px',
  margin: 'auto',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    gap: '32px'
  }
}));

export default function Footer() {
  return (
    <footer>
      <StyledContainer>
        <FooterWrapper>
          <Typography
            sx={{
              color: 'hsl(218, 11%, 65%)',
              fontFamily: 'var(--plus-jakarta-font)',
              fontSize: '0.6875rem',
              fontWeight: '400',
              lineHeight: 1.8181
            }}
          >
            © 2023 Created by Mahmoud Tarek. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '18px',
              '& svg': {
                cursor: 'pointer',
                '& path': {
                  transition: theme => theme.transitions.create('fill')
                },
                '&:hover path': {
                  fill: 'hsla(220, 3%, 89%, 0.76)'
                }
              }
            }}
          >
            <Facebook />
            <Instagram />
            <Twitter />
            <Github />
            <Youtube />
          </Box>
        </FooterWrapper>
      </StyledContainer>
    </footer>
  );
}
