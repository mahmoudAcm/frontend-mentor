import { Backdrop, CircularProgress } from '@mui/material';
import useCommentsOrRepliesSelector from '@/src/hooks/useCommentsOrRepliesSelector';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function LoadingScreen() {
  const router = useRouter();
  const { isFetching } = useCommentsOrRepliesSelector();

  const loading = isFetching || !router.isReady;

  return (
    <>
      {loading ? (
        <Head>
          <title>Frontend Mentor | Loading...</title>
        </Head>
      ) : (
        <></>
      )}
      <Backdrop
        open={loading}
        sx={{
          background: theme => theme.palette.background.default,
          zIndex: theme => theme.zIndex.appBar - 10
        }}
      >
        <CircularProgress sx={{ position: 'absolute', inset: 0, m: 'auto' }} disableShrink />
      </Backdrop>
    </>
  );
}
