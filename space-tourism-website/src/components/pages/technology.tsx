import { Box, styled, Typography } from '@mui/material';
import SecondaryLayout from '@/src/components/SecondaryLayout';
import Image from 'next/image';

export const TechnologyRoot = styled(SecondaryLayout)(({ theme }) => ({
  paddingBottom: '101px',
  [theme.breakpoints.down('lg')]: {
    paddingBottom: 0
  },
  [theme.breakpoints.down('sm')]: {
    '& .main-title': {
      textAlign: 'center'
    }
  }
}));

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '26px',
  justifyContent: 'space-between',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column-reverse',
    marginTop: '60px',
    marginBottom: '97px'
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    marginTop: '32px',
    marginBottom: '81px'
  }
}));

export const Controls = styled(Box)(({ theme }) => ({
  gap: '32px',
  marginRight: '80px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'row',
    gap: '16px',
    marginRight: 0,
    marginBottom: '44px'
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '26px'
  }
}));

export const ControlButton = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
  ...theme.typography.h4,
  letterSpacing: '2px',
  userSelect: "none",
  "&[aria-current='true']": {
    background: 'white',
    color: theme.palette.background.default
  },
  transition: theme.transitions.create(['border-color', 'background']),
  '&:hover': {
    borderColor: 'white'
  },
  [theme.breakpoints.down('lg')]: {
    width: '60px',
    height: '60px',
    fontSize: '1.5rem',
    letterSpacing: '1.5px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '40px',
    height: '40px',
    fontSize: '1rem',
    letterSpacing: '1px',
    lineHeight: 1.125
  }
}));

export const Details = styled(Box)(({ theme }) => ({
  marginTop: '137px',
  display: 'flex',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    marginTop: '56px',
    alignItems: 'center',
    textAlign: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '34px'
  }
}));

export const DetailsContent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    '& .title': {
      ...theme.typography.subheading2
    }
  }
}));

export const Name = styled(Typography)(({ theme }) => ({
  marginTop: '11px',
  marginBottom: '17px',
  textTransform: 'uppercase',
  [theme.breakpoints.down('lg')]: {
    fontSize: '2.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    lineHeight: '1.16666666667',
    marginTop: '9px',
    marginBottom: '16px'
  }
}));

export const Description = styled(Typography)(({ theme }) => ({
  maxWidth: '444px',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '458px',
    fontSize: '1rem'
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '327px',
    fontSize: '0.9375rem',
    lineHeight: 1.6666666667
  }
}));

export const StyledImage = styled(Image)(({ theme }) => ({
  marginRight: '-165px',
  [theme.breakpoints.down('lg')]: {
    width: 'calc(100% + 27px * 2)',
    marginRight: 0,
    marginLeft: '-24px',
    objectPosition: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% + 18px * 2)',
    marginLeft: '-16px',
    height: '170px'
  }
}));
