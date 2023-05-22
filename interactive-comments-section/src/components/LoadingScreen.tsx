import { Backdrop, CircularProgress } from '@mui/material';

export default function LoadingScreen() {
  return (
    <Backdrop open={true}>
      <CircularProgress />
    </Backdrop>
  );
}
