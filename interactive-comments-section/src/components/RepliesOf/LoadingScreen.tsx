import Head from 'next/head';
import { useRouter } from 'next/router';
import CommentSkeleton from '@/src/components/Comment/CommentSkeleton';

export default function LoadingScreen({ loading }: { loading: boolean }) {
  const router = useRouter();

  const isLoading = loading || !router.isReady;

  if (!isLoading) return <></>;

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
