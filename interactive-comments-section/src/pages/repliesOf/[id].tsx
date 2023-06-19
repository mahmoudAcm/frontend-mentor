import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import Replies from '@/src/components/Comment/Replies';
import { useEffect } from 'react';
import { useAppDispatch } from '@/src/store';
import { commentsOrRepliesActions } from '@/src/slices/commentsOrReplies';
import CommentOrReplay from '@/src/components/Comment';
import useCommentsOrRepliesSelector from '@/src/hooks/useCommentsOrRepliesSelector';
import Head from 'next/head';
import { AxiosError } from 'axios';
import LoadingScreen from '@/src/components/RepliesOf/LoadingScreen';

function RepliesOf() {
  const router = useRouter();
  const parentReplyId = router.query.id as string;
  const dispatch = useAppDispatch();
  const { parents, isFetchingRepliesOf } = useCommentsOrRepliesSelector();
  const repliesParent = parents[parentReplyId];

  useEffect(() => {
    if (parentReplyId && router.isReady) {
      dispatch(commentsOrRepliesActions.getRepliesOf(parentReplyId)).catch(async error => {
        if (error instanceof AxiosError) {
          if (error.response?.status === 404) await router.replace('/app');
        }
      });
    }
  }, [router, parentReplyId, dispatch]);

  if (isFetchingRepliesOf || !repliesParent) return <LoadingScreen loading={true} />;

  return (
    <>
      <Head>
        <title>Frontend Mentor | Replies of {repliesParent.user.username}</title>
      </Head>
      <Box key={parentReplyId}>
        <CommentOrReplay
          id={repliesParent.id}
          type='repliesParent'
          content={repliesParent.content}
          createdAt={repliesParent.createdAt}
          username={repliesParent.user.username}
          score={repliesParent.score}
          avatar={repliesParent.user.image}
          parentCommentId={repliesParent.parentCommentId}
          parentReplyId={repliesParent.parentReplyId}
          votes={repliesParent.votes}
          mentions={repliesParent.mentions}
        />
        <Replies parentCommentOrReplyId={parentReplyId} lvl={1} />
      </Box>
    </>
  );
}

RepliesOf.authGuard = true;

export default RepliesOf;
