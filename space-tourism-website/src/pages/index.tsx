import { Box, Container, styled, Typography } from '@mui/material';
import clsx from 'clsx';
import { ExploreButton } from '@/src/components/pages/home';

const HomeRoot = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  justifyContent: 'flex-end',
  paddingTop: '202px',
  paddingBottom: '131px',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
    paddingBottom: '90px'
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '112px',
    paddingBottom: '48px'
  }
}));

const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  '& .intro-3': {
    maxWidth: 444
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: 156,
    alignItems: 'center',
    textAlign: 'center',
    '& .intro-1': {
      fontSize: '1.25rem',
      lineHeight: 1.2,
      letterSpacing: '3.375px'
    },
    '& .intro-2': {
      lineHeight: 1
    },
    '& .intro-3': {
      fontSize: '1rem'
    }
  },
  [theme.breakpoints.down('sm')]: {
    gap: 81,
    '& .intro': {
      gap: 16
    },
    '& .intro-1': {
      ...theme.typography.nav
    },
    '& .intro-2': {
      fontSize: '5rem',
      lineHeight: 1.25
    },
    '& .intro-3': {
      fontSize: '0.9375rem',
      lineHeight: 1.6666667,
      maxWidth: '327px'
    }
  }
}));

export default function Home() {
  return (
    <Container>
      <HomeRoot
        className={clsx({
          'flex-col': true
        })}
      >
        <Content>
          <Box
            sx={{ gap: '24px' }}
            className={clsx({
              'flex-col': true,
              intro: true
            })}
          >
            <Typography variant='h5' color='textSecondary' className='intro-1'>
              SO, YOU WANT TO TRAVEL TO
            </Typography>
            <Typography variant='h1' className='intro-2'>
              SPACE
            </Typography>
            <Typography color='textSecondary' className='intro-3'>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
              kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
              experience!
            </Typography>
          </Box>
          <ExploreButton />
        </Content>
      </HomeRoot>
    </Container>
  );
}
