import CommentOrReplay from '@/src/components/Comment/CommentOrReplay';
import { Box, Divider, styled } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch } from '@/src/store';
import { commentsOrRepliesActions } from '@/src/slices/commentsOrReplies';
import useCommentsOrRepliesSelector from '@/src/hooks/useCommentsOrRepliesSelector';

const RepliesRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '43px',
  maxWidth: '730px',
  [theme.breakpoints.down('md')]: {
    gap: '16px'
  }
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  marginLeft: '43px',
  borderColor: 'var(--light-gray)',
  marginBottom: '10px',
  borderRightWidth: '2px',
  [theme.breakpoints.down('md')]: {
    marginLeft: 0
  }
}));

export default function Replies({ parentCommentOrReplyId }: { parentCommentOrReplyId: string }) {
  const { repliesOf } = useCommentsOrRepliesSelector();
  const dispatch = useAppDispatch();

  const replies = repliesOf[parentCommentOrReplyId] ?? [];

  useEffect(() => {
    dispatch(commentsOrRepliesActions.getReplies(1, parentCommentOrReplyId)).then();
  }, [dispatch, parentCommentOrReplyId]);

  if (!replies.length) return <></>;

  return (
    <RepliesRoot sx={{ marginTop: '20px' }}>
      <StyledDivider orientation='vertical' flexItem />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '24px' }}
        role='region'
        aria-label='replies section'
      >
        {replies.map(reply => (
          <CommentOrReplay
            type='reply'
            content={reply.content}
            createdAt={reply.createdAt}
            username={reply.user.username}
            votes={reply.score}
            avatar={reply.user.image}
            key={reply.id}
          />
        ))}
      </Box>
    </RepliesRoot>
  );
}
