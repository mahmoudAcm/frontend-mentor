import { Backdrop, CircularProgress } from '@mui/material';

export default function LoadingScreen() {
  return (
    <Backdrop open={true} appear={false} sx={{ background: theme => theme.palette.background.default }}>
      <CircularProgress />
    </Backdrop>
  );
}
