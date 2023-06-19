import { Box, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';

const NotificationSkeletonRoot = styled(Box)(({ theme }) => ({
  padding: '18px 20px',
  minHeight: '80px',
  display: 'flex',
  gap: '19px',
  [theme.breakpoints.down('sm')]: {
    gap: '13px',
    paddingLeft: '16px',
    paddingRight: '16px',
    '& .circle': {
      width: '39px !important',
      height: '39px !important'
    }
  }
}));

export default function NotificationSkeleton() {
  return (
    <NotificationSkeletonRoot>
      <Skeleton width='45px' height='45px' variant='circular' className='circle' />
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
          <Skeleton width='106px' height='14px' variant='rounded' />
          <Skeleton sx={{ flex: 1, minWidth: '100px' }} height='14px' variant='rounded' />
          <Skeleton width='176px' height='14px' variant='rounded' />
        </Box>
        <Skeleton width='54px' height='14px' sx={{ mt: '10px' }} variant='rounded' />
      </Box>
    </NotificationSkeletonRoot>
  );
}
