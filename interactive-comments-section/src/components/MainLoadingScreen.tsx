import Lottie from 'lottie-react';
import loader from '@/src/components/loader.json';
import { Backdrop } from '@mui/material';
import { useEffect, useState } from 'react';

interface MainLoadingScreenProps {
  loading: boolean;
}

export default function MainLoadingScreen(props: MainLoadingScreenProps) {
  const [isLooping, setLooping] = useState(true);

  useEffect(() => {
    if (!isLooping) {
      document.body.style.overflow = 'auto';
    } else document.body.style.overflow = 'hidden';
  }, [isLooping]);

  return (
    <>
      <Backdrop
        open={isLooping}
        appear={false}
        sx={{
          background: theme => theme.palette.background.default,
          zIndex: theme => theme.zIndex.appBar * 2,
          minHeight: '100%'
        }}
      >
        <Lottie
          animationData={loader}
          loop={isLooping}
          style={{ position: 'absolute', inset: 0, margin: 'auto', maxWidth: '50%' }}
          onLoopComplete={() => {
            if (!props.loading) setLooping(false);
          }}
        />
      </Backdrop>
    </>
  );
}
