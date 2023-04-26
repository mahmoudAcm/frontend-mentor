import { Backdrop, CircularProgress } from '@mui/material';

export default function LoadingScreen() {
  return (
    <Backdrop open={true} sx={{ background: theme => theme.palette.background.default, transitionDelay: '500ms' }}>
      <CircularProgress />
    </Backdrop>
  );
}
