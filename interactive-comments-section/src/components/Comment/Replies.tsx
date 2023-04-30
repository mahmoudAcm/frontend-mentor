import CommentOrReplay from '@/src/components/Comment/CommentOrReplay';
import { Box, Divider, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { Reply } from '@/src/types';
import axios from 'axios';

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

export default function Replies({ parentComment }: { parentComment: string }) {
  const [replies, setReplies] = useState<Reply[]>([]);

  useEffect(() => {
    axios.get<Reply[]>(`/api/comments/${parentComment}/replies`).then(resp => {
      setReplies(resp.data);
    });
  }, [parentComment]);

  if (!replies.length) return <></>;

  return (
    <RepliesRoot sx={{ marginTop: '20px' }}>
      <StyledDivider orientation='vertical' flexItem />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '24px' }}
        role='region'
        aria-label='replies section'
      >
        {replies.map((reply, idx) => (
          <CommentOrReplay
            type='reply'
            content={reply.content}
            createdAt={reply.createdAt}
            username={reply.user.username}
            votes={reply.score}
            avatar={reply.user.image}
            key={idx}
          />
        ))}
      </Box>
    </RepliesRoot>
  );
}
