import { Avatar, Box, Chip, Paper, styled, Typography } from '@mui/material';
import VoteButton from '@/src/components/VoteButton';
import Actions from '@/src/components/Comment/Actions';
import Content from '@/src/components/Comment/Content';
import moment from 'moment';

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

interface CommentOrReplayProps {
  type: 'comment' | 'reply';
  content: string;
  createdAt: number;
  username: string;
  votes: number;
  avatar: {
    png: string;
    webp: string;
  };
}

export default function CommentOrReplay(props: CommentOrReplayProps) {
  const owner = props.username === 'juliusomo';
  return (
    <CommentOrReplayRoot elevation={0}>
      <Box sx={{ display: 'flex' }}>
        <VoteButton votes={props.votes} />
        <Box className='comment-mobile-actions' sx={{ marginLeft: 'auto' }}>
          <Actions owner={owner} type={props.type} />
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
        <CommentOrReplayHeader aria-label={`${props.type} header`}>
          <Avatar
            src={props.avatar.png}
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
            <Actions owner={owner} type={props.type} />
          </Box>
        </CommentOrReplayHeader>
        <Content type={props.type}>{props.content}</Content>
      </Box>
    </CommentOrReplayRoot>
  );
}