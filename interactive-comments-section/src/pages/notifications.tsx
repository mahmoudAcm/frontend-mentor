import { List, Paper, styled } from '@mui/material';
import Head from 'next/head';
import Header from '@/src/components/Notifications/Header';
import Notification, { WelcomeMessage } from '@/src/components/Notifications/Notification';
import useNotificationsSelector from '@/src/hooks/useNotificationsSelector';
import LoadingScreen from '@/src/components/Notifications/LoadingScreen';

const NotificationsRoot = styled(Paper)(({ theme }) => ({
  padding: '33px 30px',
  minHeight: '75vh',
  position: 'relative',
  [theme.breakpoints.down('lg')]: {
    padding: '24px 16px',
    borderRadius: 0,
    minHeight: 'calc(100vh - 56px)'
  }
}));

function Notifications() {
  const { notifications } = useNotificationsSelector();

  return (
    <>
      <Head>
        <title>Frontend Mentor | Notifications </title>
      </Head>
      <NotificationsRoot elevation={0}>
        <Header />
        <List sx={{ display: 'grid', gap: '8px', p: 0 }} aria-label='notifications'>
          {notifications.map((notification, idx) => (
            <Notification key={idx} {...notification} />
          ))}
        </List>
        <LoadingScreen />
        <WelcomeMessage />
      </NotificationsRoot>
    </>
  );
}

Notifications.authGuard = true;

export default Notifications;
