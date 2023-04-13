import { Box, styled, Typography } from '@mui/material';
import Link from 'next/link';

export const ButtonRoot = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 0,
  '--circle-width': '274px',
  '--inner-circle-border-width': '176px',
  '& .MuiTypography-root': {
    width: 'var(--circle-width)',
    height: 'var(--circle-width)',
    borderRadius: '50%',
    background: 'white',
    display: 'grid',
    placeItems: 'center',
    color: '#0B0D17',
    cursor: 'pointer',
    userSelect: 'none',
    '&:hover': {
      '& + .innerCircle': {
        opacity: 0.1
      }
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
      letterSpacing: 1.25
    }
  },
  [theme.breakpoints.down('lg')]: {
    '--circle-width': '242px',
    '--inner-circle-border-width': '155px'
  },
  [theme.breakpoints.down('sm')]: {
    '--circle-width': '150px',
    '--inner-circle-border-width': '96.4px'
  }
}));

export const InnerCircle = styled(Box)(({ theme }) => ({
  width: 'calc(var(--circle-width) + var(--inner-circle-border-width))',
  height: 'calc(var(--circle-width) + var(--inner-circle-border-width))',
  borderRadius: '50%',
  background: 'white',
  position: 'absolute',
  opacity: 0,
  zIndex: -1,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  transition: theme.transitions.create('opacity')
}));

export function ExploreButton() {
  return (
    <Link href='/destination' style={{ textDecoration: 'none', font: 'inherit', color: 'currentColor' }}>
      <ButtonRoot>
        <Typography variant='h4' letterSpacing='2px'>
          EXPLORE
        </Typography>
        <InnerCircle className='innerCircle' />
      </ButtonRoot>
    </Link>
  );
}
