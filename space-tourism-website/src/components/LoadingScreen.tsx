import { Box, Fade, styled, Typography } from '@mui/material';
import { ButtonRoot, InnerCircle as DefaultInnerCircle } from '@/src/components/pages/home';

const LoadingRoot = styled(Box)(({ theme }) => ({
  display: 'grid',
  placeItems: 'center',
  position: 'fixed',
  inset: 0,
  width: '100%',
  height: '100%',
  zIndex: theme.zIndex.appBar * 10,
  background: `radial-gradient(circle at 50% 50%, ${theme.palette.primary.light}, ${theme.palette.primary.main})`
}));

const InnerCircle = styled(DefaultInnerCircle)(() => ({
  animation: 'ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite',
  '@keyframes ripple': {
    '0%': {
      width: '0',
      height: '0',
      opacity: 1
    },
    '100%': {
      width: 'calc(var(--circle-width) + var(--inner-circle-border-width))',
      height: 'calc(var(--circle-width) + var(--inner-circle-border-width))',
      opacity: 0
    }
  }
}));

function LoadingButton() {
  return (
    <ButtonRoot>
      <Typography variant='h4' letterSpacing='2px'>
        LOADING...
      </Typography>
      <InnerCircle className='innerCircle' />
    </ButtonRoot>
  );
}

export default function LoadingScreen({
  loading,
  onTransitionEnd
}: {
  loading?: boolean;
  onTransitionEnd: () => void;
}) {
  return (
    <Fade in={loading} appear={false} onTransitionEnd={onTransitionEnd} timeout={500}>
      <LoadingRoot>
        <LoadingButton />
      </LoadingRoot>
    </Fade>
  );
}
