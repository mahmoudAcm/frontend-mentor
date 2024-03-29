import { Box, styled, Typography } from '@mui/material';
import useNotificationsSelector from '@/src/hooks/useNotificationsSelector';
import { useAppDispatch } from '@/src/store';
import { notificationsActions } from '@/src/slices/notifications';
import useSocketContext from '@/src/hooks/useSocketContext';
import { SOCKET_EVENTS } from '@/src/constants';
import useAuthContext from '@/src/hooks/useAuthContext';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

const HeaderRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '30px',
  marginBottom: '31px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '24px'
  }
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--plus-jakarta-font)',
  lineHeight: 1.25,
  display: 'flex',
  gap: '11px',
  color: 'rgba(28, 32, 43, 1)',
  fontWeight: 800,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem'
  }
}));

const MarkAllAsRead = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--plus-jakarta-font)',
  lineHeight: 1.25,
  cursor: 'pointer',
  color: 'rgba(94, 103, 120, 1)',
  userSelect: 'none',
  '&:hover': {
    color: 'rgba(10, 50, 123, 1)'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.875rem'
  }
}));

const Badge = styled(Typography)(({ theme }) => ({
  width: '32px',
  height: '25px',
  // background: 'rgba(10, 50, 123, 1)',
  background: theme.palette.primary.main,
  borderRadius: '6px',
  fontFamily: 'var(--plus-jakarta-font)',
  lineHeight: 1.26,
  fontWeight: 800,
  textAlign: 'center',
  color: 'white',
  userSelect: 'none'
}));

export default function Header() {
  const { unreadCount } = useNotificationsSelector();
  const {
    user: { email }
  } = useAuthContext();
  const { emit } = useSocketContext();
  const dispatch = useAppDispatch();

  const markAll = async () => {
    if (unreadCount) {
      let toastId: any;
      try {
        toastId = toast('Marking all your notifications as read', {
          isLoading: true
        });
        await dispatch(notificationsActions.markAll());
        emit(SOCKET_EVENTS.MARK_NOTIFICATIONS_AS_READ, email);
        toast.update(toastId, {
          isLoading: false,
          autoClose: 5000,
          type: 'success',
          render: 'All notifications marked as read'
        });
      } catch (error) {
        if (error instanceof AxiosError) {
          toast.update(toastId!, {
            isLoading: false,
            type: 'error',
            autoClose: 5000,
            render: error.response?.data.message! ?? 'Something went wrong'
          });
        }
      }
    }
  };

  return (
    <HeaderRoot
      tabIndex={0}
      aria-label={unreadCount ? `You have ${unreadCount} unread notifications` : 'You have read all the notifications'}
    >
      <Title variant='h1'>
        Notifications
        {unreadCount ? <Badge sx={{ pt: '1px', pb: '4px' }}>{unreadCount}</Badge> : <></>}
      </Title>
      <MarkAllAsRead onClick={markAll} role='button' aria-label='Mark all as read' tabIndex={0}>
        Mark all as read
      </MarkAllAsRead>
    </HeaderRoot>
  );
}
