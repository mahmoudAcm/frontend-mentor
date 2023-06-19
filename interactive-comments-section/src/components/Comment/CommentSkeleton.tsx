import { Box, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';

const CommentSkeletonRoot = styled(Box)(({ theme }) => ({
  maxWidth: '730px',
  minHeight: '167px',
  background: 'white',
  borderRadius: '8px',
  padding: '24px',
  display: 'flex',
  gap: '24px',
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
    flexDirection: 'column-reverse',
    '& .vote-button': {
      width: '100px !important',
      height: '40px !important'
    }
  }
}));

export default function CommentSkeleton() {
  return (
    <CommentSkeletonRoot>
      <Skeleton width='40px' height='100px' variant='rounded' animation='wave' className='vote-button' />
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', gap: '9px', alignItems: 'center' }}>
            <Skeleton width='32px' height='32px' variant='circular' />
            <Skeleton width='89px' height='14px' variant='rounded' animation='wave' />
          </Box>
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <Skeleton width='14px' height='12.25px' variant='rounded' animation='wave' />
            <Skeleton width='23px' height='14px' variant='rounded' animation='wave' />
          </Box>
        </Box>
        <Box sx={{ mt: '9px', display: 'grid', gap: '6px' }}>
          <Skeleton height='14px' sx={{ maxWidth: '438px' }} variant='rounded' animation='wave' />
          <Skeleton sx={{ maxWidth: '534px' }} height='14px' variant='rounded' animation='wave' />
          <Skeleton sx={{ maxWidth: '331px' }} height='14px' variant='rounded' animation='wave' />
          <Skeleton sx={{ maxWidth: '429px' }} height='14px' variant='rounded' animation='wave' />
        </Box>
      </Box>
    </CommentSkeletonRoot>
  );
}
