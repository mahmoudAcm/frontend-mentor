import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';

export const DestinationRoot = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: '202px',
  paddingBottom: '118px',
  gap: '64px',
  '& .number': {
    fontWeight: 700,
    marginRight: '28px',
    color: 'white',
    opacity: 0.25
  },
  '& .title': {
    lineHeight: 1.2
  },
  [theme.breakpoints.down('lg')]: {
    paddingTop: '136px',
    paddingBottom: '62px',
    gap: '60px',
    '& .number': {
      marginRight: '19px'
    },
    '& .title': {
      marginLeft: '14.5px',
      fontSize: '1.25rem',
      letterSpacing: '3.38px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '88px',
    paddingBottom: '58px',
    gap: '32px',
    '& .title': {
      ...theme.typography.nav,
      marginLeft: 0
    },
    marginLeft: 0,
    textAlign: 'center',
    '& .number': {
      marginRight: '18px'
    }
  }
}));

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  columnGap: '157px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  }
}));

export const PlantImage = styled(Image)(({ theme }) => ({
  marginTop: 33,
  marginLeft: 65,
  [theme.breakpoints.down('lg')]: {
    marginLeft: 0,
    marginTop: 0,
    marginBottom: '53px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '170px',
    height: '170px',
    marginBottom: '26px'
  }
}));

export const Tabs = styled(Box)(() => ({
  display: 'flex',
  gap: '36.5px',
  width: 'fit-content',
  height: 'fit-content'
}));

export const Tab = styled(Box)(({ theme }) => ({
  ...theme.typography.nav,
  paddingBottom: '12.6px',
  borderBottom: '3px solid transparent',
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  userSelect: 'none',
  transition: theme.transitions.create('border-color'),
  "&[aria-selected='true']": {
    borderColor: 'white !important',
    color: 'white'
  },
  '&:hover': {
    borderColor: '#979797'
  },
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '6.6px'
  }
}));

export const Details = styled(Box)(({ theme }) => ({
  maxWidth: '445px',
  gap: '37px',
  height: 'fit-content',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '573px',
    alignItems: 'center',
    gap: '32px'
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '327px',
    gap: '20px'
  }
}));

export const DetailsContent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    '& .planetName': {
      fontSize: '5rem'
    }
  },
  [theme.breakpoints.down('sm')]: {
    '& .planetName': {
      fontSize: '3.5rem'
    }
  }
}));

export const Description = styled(Typography)(({ theme }) => ({
  marginTop: '14px',
  marginBottom: '54px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1rem',
    marginTop: '8px',
    marginBottom: '49px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9375rem',
    lineHeight: 1.66666667,
    marginTop: '1px',
    marginBottom: '32px'
  }
}));

export const Divider = styled(Box)(({ theme }) => ({
  flex: 1,
  height: 1,
  background: '#383B4B',
  marginBottom: '28px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '32px'
  }
}));

export const InfoList = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '79px',
  textTransform: 'uppercase',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '32px'
  }
}));

export const Info = styled(Box)(() => ({
  gap: '12px'
}));
