import useCommentsOrRepliesSelector from '@/src/hooks/useCommentsOrRepliesSelector';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CommentSkeleton from '@/src/components/Comment/CommentSkeleton';

export default function LoadingScreen() {
  const router = useRouter();
  const { isFetching } = useCommentsOrRepliesSelector();

  const loading = isFetching || !router.isReady;

  if (!loading) return <></>;

  return (
    <>
      <Head>
        <title>Frontend Mentor | Loading...</title>
      </Head>
      <CommentSkeleton />
      <CommentSkeleton />
      <CommentSkeleton />
      <CommentSkeleton />
    </>
  );
}
