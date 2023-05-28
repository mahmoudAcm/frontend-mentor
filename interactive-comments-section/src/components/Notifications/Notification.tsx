import { Avatar, Box, ListItem, styled, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import moment from 'moment/moment';

const NotificationRoot = styled(Box)(({ theme }) => ({
  minHeight: '80px',
  padding: '20px 17px 18px',
  display: 'flex',
  gap: '19px',
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    padding: '16px',
    gap: '13px'
  }
}));

const PersonAvatar = styled(Avatar)(({ theme }) => ({
  width: '45px',
  height: '45px',
  border: '1px solid rgba(0, 0, 0, 0.0464)',
  [theme.breakpoints.down('md')]: {
    width: '39px',
    height: '39px'
  }
}));

const Text = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--plus-jakarta-font)',
  lineHeight: 1.26,
  alignItems: 'center',
  breakWord: 'break-all',
  '& span:nth-of-type(2)': {
    marginLeft: '7px',
    marginRight: '7px'
  },
  '& span:nth-of-type(3)': {
    marginRight: '7px'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.875rem'
  }
}));

const Time = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--plus-jakarta-font)',
  lineHeight: 1.26,
  color: 'rgba(147, 156, 173, 1)',
  marginTop: '3px',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.875rem'
  }
}));

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    background: 'rgba(246, 85, 82, 1)'
  }
}));

const mapActionAndReplyToText = (action: string, type: 'comment' | 'reply') => {
  if (action === 'reply') return `replied on your ${type}`;
  if (action === 'vote') return `reacted to your ${type}`;
  if (action === 'mention') return `mentioned you on this ${type}`;
};

interface NotificationProps {
  seen?: boolean;
  type: 'comment' | 'reply';
  action: 'reply' | 'vote' | 'mention';
  content: string;
  createdAt: number;
  user: {
    image: string;
    username: string;
  };
}

export default function Notification(props: NotificationProps) {
  return (
    <ListItem
      sx={{ p: 0, background: props.seen ? undefined : 'rgba(247, 250, 253, 1)' }}
      aria-label={`${props.user.username} ${mapActionAndReplyToText(props.action, props.type)} ${props.content}`}
      tabIndex={0}
    >
      <NotificationRoot component='article'>
        <PersonAvatar src={props.user.image} alt={`${props.user.username} profile picture`} />
        <Box>
          <Text>
            <span style={{ fontWeight: 800, color: 'rgba(28, 32, 43, 1)' }}>{props.user.username}</span>
            <span style={{ color: 'rgba(94, 103, 120, 1)' }}>{mapActionAndReplyToText(props.action, props.type)}</span>
            <span
              style={{
                fontWeight: 800,
                color: 'rgba(94, 103, 120, 1)',
                cursor: 'pointer'
              }}
            >
              {props.content}
            </span>
            {props.seen ? <></> : <StyledBadge variant='dot' />}
          </Text>
          <Time>{moment(props.createdAt).fromNow()}</Time>
        </Box>
      </NotificationRoot>
    </ListItem>
  );
}
