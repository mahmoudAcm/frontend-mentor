import CommentOrReplay from '@/src/components/Comment/CommentOrReplay';
import { Box, Button, Divider, styled, useMediaQuery, useTheme } from '@mui/material';
import useCommentsOrRepliesSelector from '@/src/hooks/useCommentsOrRepliesSelector';
import { useRouter } from 'next/router';

const RepliesRoot = styled(Box)(() => ({
  display: 'flex',
  gap: '16px',
  maxWidth: '730px'
}));

const StyledDivider = styled(Divider)(() => ({
  borderColor: 'var(--light-gray)',
  marginBottom: '10px',
  borderRightWidth: '2px'
}));

const useShowMoreLevels = (lvl: number) => {
  const theme = useTheme();
  const mobile = useMediaQuery(() => theme.breakpoints.down(500));
  if (mobile && lvl <= 1) return true;
  return !mobile && lvl <= 4;
};

export default function Replies({ parentCommentOrReplyId, lvl }: { parentCommentOrReplyId: string; lvl: number }) {
  const { repliesOf } = useCommentsOrRepliesSelector();
  const showMore = useShowMoreLevels(lvl);
  const router = useRouter();

  const replies = repliesOf[parentCommentOrReplyId] ?? [];

  if (!showMore)
    return (
      <Button
        variant='outlined'
        onClick={() => {
          router.push('/repliesOf/' + parentCommentOrReplyId).then();
        }}
      >
        show more
      </Button>
    );

  if (!replies.length) return <></>;

  return (
    <RepliesRoot sx={{ marginTop: lvl === 1 ? '20px' : 0 }}>
      <StyledDivider orientation='vertical' flexItem />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '24px' }}
        role='region'
        aria-label='replies section'
      >
        {replies.map(reply => (
          <Box key={reply.id} sx={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '24px' }}>
            <CommentOrReplay
              id={reply.id}
              type='reply'
              content={reply.content}
              createdAt={reply.createdAt}
              username={reply.user.username}
              votes={reply.score}
              avatar={reply.user.image}
              parentCommentId={reply.parentCommentId}
              parentReplyId={reply.parentReplyId}
            />
            {reply.hasReplies ? <Replies parentCommentOrReplyId={reply.id} lvl={lvl + 1} /> : <></>}
          </Box>
        ))}
      </Box>
    </RepliesRoot>
  );
}
