import { List, Paper, styled } from '@mui/material';
import Head from 'next/head';
import Header from '@/src/components/Notifications/Header';
import Notification from '@/src/components/Notifications/Notification';
import useNotificationsSelector from '@/src/hooks/useNotificationsSelector';
import Image from 'next/image';

const NotificationsRoot = styled(Paper)(({ theme }) => ({
  padding: '33px 30px',
  minHeight: '75vh',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
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
        {notifications.length ? (
          <></>
        ) : (
          <Image
            src='/images/empty-notification.svg'
            width='445'
            height='334'
            alt='no notifications'
            style={{
              position: 'absolute',
              inset: 0,
              margin: 'auto',
              userSelect: 'none'
            }}
            draggable='false'
          />
        )}
        <List sx={{ display: 'grid', gap: '8px', p: 0 }} aria-label='notifications'>
          {notifications.map((notification, idx) => (
            <Notification key={idx} {...notification} />
          ))}
        </List>
      </NotificationsRoot>
    </>
  );
}

Notifications.authGuard = true;

export default Notifications;
