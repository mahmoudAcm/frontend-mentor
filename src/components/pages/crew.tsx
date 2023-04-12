import { Box, styled, Typography } from '@mui/material';
import SecondaryLayout from '@/src/components/SecondaryLayout';

export const CrewRoot = styled(SecondaryLayout)(({ theme }) => ({
  justifyContent: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    '& .main-title': {
      textAlign: 'center'
    },
    justifyContent: 'flex-start'
  }
}));

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20.5px',
  justifyContent: 'space-between',
  [theme.breakpoints.down('lg')]: {
    gap: 0,
    alignItems: 'center',
    flexDirection: 'column'
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse'
  }
}));

export const Details = styled(Box)(({ theme }) => ({
  minWidth: '614px',
  [theme.breakpoints.down('lg')]: {
    minWidth: 0,
    alignItems: 'center',
    textAlign: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse'
  }
}));

export const Role = styled(Typography)(({ theme }) => ({
  marginTop: '154px',
  marginBottom: '15px',
  textTransform: 'uppercase',
  justifyContent: 'space-between',
  color: 'white',
  opacity: 0.5,
  [theme.breakpoints.down('lg')]: {
    marginTop: '60px',
    marginBottom: '8px',
    fontSize: '1.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginTop: '32px'
  }
}));

export const Name = styled(Typography)(({ theme }) => ({
  marginBottom: '27px',
  textTransform: 'uppercase',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '16px',
    fontSize: '2.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem'
  }
}));

export const Bio = styled(Typography)(({ theme }) => ({
  maxWidth: '444px',
  marginBottom: '120px',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '40px',
    maxWidth: '526.5px',
    fontSize: '1rem'
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '327px',
    fontSize: '0.9375rem',
    marginBottom: '54px'
  }
}));
export const Controls = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '24px',
  marginBottom: '94px',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '40px'
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: 0,
    marginTop: '32px'
  }
}));

export const ControlButton = styled(Box)(() => ({
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  background: 'white',
  opacity: 0.17,
  cursor: 'pointer',
  "&[aria-disabled='true']": {
    background: 'white',
    opacity: 1
  }
}));

export const CrewImageWrapper = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  '& img': {
    height: '100%',
    marginBottom: -10,
    "&[data-order='0']": {
      marginTop: '-47px',
      height: '712px'
    },
    [theme.breakpoints.down('lg')]: {
      height: '532px',
      "&[data-order='0']": {
        marginTop: 0
      }
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      height: '222px !important',
      marginBottom: 0
    }
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid #383B4B',
    marginTop: '32px'
  }
}));
