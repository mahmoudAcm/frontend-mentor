import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Link, Typography } from '@mui/material';
import UserDropDown from '@/src/components/Header/UserDropDown';
import Image from 'next/image';
import NotificationIcon from '@/src/icons/Notification';
import Badge from '@mui/material/Badge';
import useNotificationsSelector from '@/src/hooks/useNotificationsSelector';
import NextLink from 'next/link';

export const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.light,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}));

export default function Header() {
  const { unreadCount } = useNotificationsSelector();

  return (
    <AppBar position='sticky' elevation={0} sx={{ background: 'white', borderBottom: '1px solid #EAECF1' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: '14px' }}>
          <Image src='/images/logo.svg' alt='interactive comment section logo' width='29' height='24' priority />
          <Typography color='textPrimary'>Frontend Mentor</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItem: 'center', gap: '13px' }}>
          <Badge
            badgeContent={unreadCount}
            color='primary'
            overlap='circular'
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <Link
              aria-label={`You have ${unreadCount} notifications`}
              component={NextLink}
              href='/notifications'
              sx={{
                background: theme => theme.palette.background.default,
                transition: theme => theme.transitions.create('background'),
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                position: 'relative',
                cursor: 'pointer',
                '&:hover': {
                  background: 'rgba(238, 239, 242, 0.79)'
                }
              }}
            >
              <NotificationIcon sx={{ position: 'absolute', inset: 0, m: 'auto' }} />
            </Link>
          </Badge>
          <UserDropDown />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
