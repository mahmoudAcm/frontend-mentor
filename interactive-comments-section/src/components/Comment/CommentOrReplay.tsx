import { Avatar, Box, Chip, Paper, styled, Typography } from '@mui/material';
import VoteButton from '@/src/components/VoteButton';
import Actions from '@/src/components/Comment/Actions';
import Content from '@/src/components/Comment/Content';
import moment from 'moment';
import Form from '@/src/components/Comment/Form';
import { CommentOrReplayProvider } from '@/src/contexts/CommentOrReplayContext';
import useCommentOrReplyContext from '@/src/hooks/useCommentOrReplyContext';
import useAuthContext from '@/src/hooks/useAuthContext';

const CommentOrReplayRoot = styled(Paper)(({ theme }) => ({
  padding: '24px',
  maxWidth: '730px',
  display: 'flex',
  gap: '24px',
  '& .comment-mobile-actions': {
    display: 'none'
  },
  [theme.breakpoints.down('md')]: {
    padding: '16px',
    flexDirection: 'column-reverse',
    '& .comment-mobile-actions': {
      display: 'block'
    },
    '& .comment-desktop-action': {
      display: 'none'
    }
  }
}));

const CommentOrReplayHeader = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  '& .name-and-title': {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    columnGap: '16px'
  }
}));

const StyledChip = styled(Chip)(() => ({
  marginLeft: '8px',
  borderRadius: '2px',
  lineHeight: 1.153846,
  height: '19px',
  '& .MuiChip-label': {
    paddingLeft: '6px',
    paddingRight: '6px'
  }
}));

type Type = 'comment' | 'reply' | 'repliesParent';

export interface CommentOrReplayProps {
  id: string;
  type: Type;
  content: string;
  createdAt: number;
  username: string;
  votes: number;
  avatar: string;
  parentCommentId?: string;
  parentReplyId?: string;
}

const CommentOrReplyForm = ({ type, replyingTo }: { type: Type; replyingTo: string }) => {
  const { openForm } = useCommentOrReplyContext();
  if (!openForm) return <></>;
  return (
    <Form
      type='reply'
      parentType={type as 'reply' | 'comment'}
      replyingTo={replyingTo}
      sx={{ marginTop: ['comment', 'repliesParent'].includes(type) ? '8px' : '-16px' }}
    />
  );
};

export default function CommentOrReplay(props: CommentOrReplayProps) {
  const { user } = useAuthContext();
  const owner = props.username === user.email.split('@')[0];

  return (
    <CommentOrReplayProvider value={{ ...props, owner }}>
      <>
        <CommentOrReplayRoot elevation={0}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: '15px'
            }}
          >
            <VoteButton />
            <Box className='comment-mobile-actions'>
              <Actions />
            </Box>
          </Box>
          <Box sx={{ width: '100%' }}>
            <CommentOrReplayHeader aria-label={`${props.type} header`}>
              <Avatar
                src={props.avatar}
                sx={{ width: '32px', height: '32px' }}
                alt={`${props.username} profile picture`}
              />
              <Box className='name-and-title'>
                <Typography variant='h2' aria-label={`${props.type} owner: ${props.username}`}>
                  {props.username}
                  {owner ? <StyledChip label='you' color='primary' /> : <></>}
                </Typography>
                <Typography fontWeight='400' color='textSecondary'>
                  {moment(props.createdAt).fromNow()}
                </Typography>
              </Box>
              <Box className='comment-desktop-action' sx={{ marginLeft: 'auto', marginTop: '-2px' }}>
                <Actions />
              </Box>
            </CommentOrReplayHeader>
            <Content />
          </Box>
        </CommentOrReplayRoot>
        <CommentOrReplyForm type={props.type} replyingTo={props.id} />
      </>
    </CommentOrReplayProvider>
  );
}
