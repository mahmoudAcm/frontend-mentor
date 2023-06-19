import { Box, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';

const WelcomeMessageSkeletonRoot = styled(Box)(({ theme }) => ({
  padding: '18px 20px',
  minHeight: '80px',
  display: 'flex',
  gap: '19px',
  marginBottom: '40px',
  [theme.breakpoints.down('sm')]: {
    gap: '13px',
    paddingLeft: '16px',
    paddingRight: '16px',
    '& .circle': {
      width: '39px !important',
      height: '39px !important'
    },
    '& .rounded': {
      display: 'none'
    }
  }
}));

export default function WelcomeMessageSkeleton() {
  return (
    <WelcomeMessageSkeletonRoot>
      <Skeleton width='45px' height='45px' variant='circular' className='circle' />
      <Box sx={{ display: 'grid', gap: '6px', flex: 1 }}>
        <Skeleton sx={{ maxWidth: '251px' }} height='14px' variant='rounded' />
        <Skeleton sx={{ maxWidth: '512px' }} height='14px' variant='rounded' />
        <Skeleton sx={{ maxWidth: '297px' }} height='14px' variant='rounded' />
        <Skeleton sx={{ maxWidth: '433px' }} height='14px' variant='rounded' />
        <Skeleton sx={{ maxWidth: '470px' }} height='14px' variant='rounded' />
        <Skeleton sx={{ maxWidth: '397px' }} height='14px' variant='rounded' />
        <Skeleton sx={{ maxWidth: '446px' }} height='14px' variant='rounded' />
        <Skeleton sx={{ maxWidth: '506px' }} height='14px' variant='rounded' />
        <Skeleton sx={{ maxWidth: '572px' }} height='14px' variant='rounded' />
        <Skeleton sx={{ maxWidth: '317px' }} height='14px' variant='rounded' />
        <Skeleton sx={{ maxWidth: '465px' }} height='14px' variant='rounded' className='rounded' />
        <Skeleton sx={{ maxWidth: '337px' }} height='14px' variant='rounded' className='rounded' />
        <Skeleton sx={{ maxWidth: '574px' }} height='14px' variant='rounded' className='rounded' />
      </Box>
    </WelcomeMessageSkeletonRoot>
  );
}
