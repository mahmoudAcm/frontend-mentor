import { Avatar, Box, ListItem, styled, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import moment from 'moment/moment';
import useNotificationsSelector from '@/src/hooks/useNotificationsSelector';

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

export function WelcomeMessage() {
  const { isFetching } = useNotificationsSelector();
  if (isFetching) return <></>;
  return (
    <Box sx={{ p: 0, borderRadius: '8px', userSelect: 'none' }} tabIndex={0}>
      <NotificationRoot component='article'>
        <PersonAvatar
          src='/images/avatars/community.png'
          alt='community profile picture'
          sx={{ borderColor: 'transparent' }}
        />
        <Box sx={{ display: 'grid', gap: '20px' }}>
          <Text>🎉 Welcome to our community! 🎉</Text>
          {/*Error:(76, 58) ESLint: `'` can be escaped with `&amp;apos;`, `&amp;lsquo;`, `&amp;#39;`, `&amp;rsquo;`.*/}
          {/*(react/no-unescaped-entities)*/}
          <Text>
            We are thrilled to have you join us! Whether you&apos;re a new member or returning, we want to extend a warm
            welcome to you.
          </Text>
          <Text>
            This is a place where you can connect with like-minded individuals, share ideas, and explore new horizons.
            Our diverse community is filled with people from various backgrounds, all coming together to learn and grow.
          </Text>
          <Text>
            Feel free to ask questions, seek advice, or start conversations on any topic that interests you. Our goal is
            to foster a supportive and inclusive environment where everyone&apos;s voice is valued.
          </Text>
          <Text>
            Once again, welcome! We hope you have a fantastic time here and forge lasting connections. Let the journey
            begin!
          </Text>
          <Text>
            <Text>Best regards,</Text>
            <Text>Frontend Mentor</Text>
          </Text>
        </Box>
      </NotificationRoot>
    </Box>
  );
}

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
  createdAt: string;
  user: {
    image: string;
    username: string;
  };
}

export default function Notification(props: NotificationProps) {
  return (
    <ListItem
      sx={{
        p: 0,
        background: props.seen ? undefined : 'rgba(247, 250, 253, 1)',
        borderRadius: '8px',
        userSelect: 'none'
      }}
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
