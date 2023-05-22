import Lottie from 'lottie-react';
import loader from '@/src/components/loader.json';
import { Backdrop } from '@mui/material';
import { useState } from 'react';

interface MainLoadingScreenProps {
  loading: boolean;
}

export default function MainLoadingScreen(props: MainLoadingScreenProps) {
  const [isLooping, setLooping] = useState(true);

  return <></>;

  return (
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
        onLoopComplete={() => {
          if (!props.loading) setLooping(false);
        }}
      />
    </Backdrop>
  );
}
