import { Box, Button, Chip, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Pattern from './Pattern';
import NextLink from 'next/link';
import CloseIcon from '@/src/icons/Close';
import ArrowIcon from '@/src/icons/Arrow';
import Image from 'next/image';
import { StyledContainer } from '@/src/components/LandingPage/Shared';

const Toolbar = styled(Box)(({ theme }) => ({
  backgroundImage: 'linear-gradient(to right, #BD00FF, #51ABFF)',
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '7px',
  '& *': {
    userSelect: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

const Container = styled(StyledContainer)(({ theme }) => ({
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1500px !important'
  }
}));

const LeftSide = styled(Box)(({ theme }) => ({
  maxWidth: '572px',
  marginTop: '273px',
  [theme.breakpoints.down('lg')]: {
    marginTop: '130px'
  }
}));

const NewBadge = styled(Chip)(() => ({
  background: 'white',
  color: 'hsl(268, 100%, 62%)',
  textTransform: 'uppercase',
  borderRadius: '8px',
  fontFamily: 'var(--plus-jakarta-font)',
  fontWeight: '500',
  fontSize: '0.75rem',
  lineHeight: 1.3333333,
  padding: '2px 8px 4px',
  height: 'fit-content',
  '& .MuiChip-label': {
    padding: 0
  }
}));

const LatestUpdatesBadge = styled(Chip)(() => ({
  background: 'white',
  color: 'hsl(234, 89%, 74%)',
  fontFamily: 'var(--plus-jakarta-font)',
  fontSize: '0.8125rem',
  lineHeight: 1.8461,
  padding: '4px 14px',
  height: 'fit-content',
  '& .MuiChip-label': {
    padding: 0
  }
}));

const VersionBadge = styled(LatestUpdatesBadge)(() => ({
  background: 'transparent',
  color: 'hsl(216, 12%, 84%)'
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--plus-jakarta-font)',
  fontWeight: '700',
  fontSize: '3.143125rem',
  lineHeight: 1.091071,
  letterSpacing: '1.37px',
  color: 'white',
  marginTop: '36px',
  marginBottom: '34px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    lineHeight: 1.0403125,
    letterSpacing: '0.83px'
  }
}));

const Subtitle = styled(Typography)(() => ({
  fontFamily: 'var(--plus-jakarta-font)',
  fontWeight: '600',
  fontSize: '1.125rem',
  lineHeight: 1.77778,
  color: 'hsl(216, 12%, 84%)',
  marginBottom: '40px'
}));

const StyledButton = styled(Button)(() => ({
  fontFamily: 'var(--plus-jakarta-font)',
  fontWeight: '600',
  fontSize: '0.8125rem',
  lineHeight: 1.53846,
  textTransform: 'capitalize',
  padding: '10px 14px',
  borderRadius: '6px'
}));

const Illustration = styled(Box)(({ theme }) => ({
  marginTop: '161px',
  width: '538px',
  height: '632px',
  overflow: 'hidden',
  borderTopLeftRadius: '6px',
  borderBottomLeftRadius: '6px',
  boxShadow: '0 25px 50px -12px rgb(0 0 0 / .25)',
  '& img': {
    width: '1156.81px',
    height: 'auto'
  },
  [theme.breakpoints.up('xl')]: {
    borderRadius: '25px',
    marginRight: '0 !important'
  },
  [theme.breakpoints.up('lg')]: {
    marginRight: '-156px'
  },
  [theme.breakpoints.down(1398)]: {
    marginRight: '-45px'
  },
  [theme.breakpoints.down(1203)]: {
    width: 'max(69%, 723px)',
    marginLeft: 'auto',
    marginTop: '139px',
    '& img': {
      width: '1156.81px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    width: '359px',
    height: '286px',
    marginTop: '59px',
    '& img': {
      width: '524px'
    }
  },
  [theme.breakpoints.down(544)]: {
    marginRight: '-16px'
  }
}));

function Home() {
  return (
    <Box sx={{ position: 'relative' }}>
      <Pattern />
      <Toolbar>
        <NewBadge label='new' />
        <Typography color='white' fontFamily='var(--plus-jakarta-font)'>
          Our interactive app has just launched!
        </Typography>
        <Link
          component={NextLink}
          href='/demo'
          sx={{
            fontFamily: 'var(--plus-jakarta-font)',
            color: 'white',
            textDecorationColor: 'currentColor',
            fontWeight: '500'
          }}
          arai-label='try it for free'
        >
          Try it for free!
        </Link>
        <CloseIcon sx={{ cursor: 'pointer' }} tabIndex={0} arai-label='close the ad' />
      </Toolbar>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', columnGap: '48px', flexWrap: 'wrap' }}>
          <LeftSide>
            <LatestUpdatesBadge label='Latest updates' />
            <VersionBadge label='Version 1.0.0' sx={{ ml: '6px' }} />
            <Title>Connect and Interact with people</Title>
            <Subtitle>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Share your thoughts, questions, or topics to discuss. Let's have an informative and enjoyable
              conversation.
            </Subtitle>
            <NextLink href='/signin'>
              <StyledButton
                variant='contained'
                sx={{
                  background: 'hsl(239, 84%, 67%)',
                  '&:hover': {
                    background: 'hsl(234, 89%, 73%)'
                  }
                }}
              >
                Get started
              </StyledButton>
            </NextLink>
            <NextLink href='/app'>
              <StyledButton
                disableRipple
                sx={{
                  ml: '10px',
                  color: 'white',
                  '&:hover': {
                    background: 'transparent'
                  }
                }}
                endIcon={<ArrowIcon />}
              >
                Live demo
              </StyledButton>
            </NextLink>
          </LeftSide>
          <Illustration>
            <Image
              src='/images/illiesteration/Home-02.png'
              alt=''
              width={1155}
              height={1437}
              blurDataURL='/images/illiesteration/top.jpg'
            />
          </Illustration>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
