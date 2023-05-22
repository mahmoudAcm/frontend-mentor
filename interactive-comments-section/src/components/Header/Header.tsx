import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Typography } from '@mui/material';
import UserDropDown from '@/src/components/Header/UserDropDown';
import Image from 'next/image';

export const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.light,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}));

export default function Header() {
  return (
    <AppBar position='sticky' elevation={0} sx={{ background: 'white', borderBottom: '1px solid #EAECF1' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: '14px' }}>
          <Image src='/images/logo.svg' alt='interactive comment section logo' width='29' height='24' priority />
          <Typography color='textPrimary'>Frontend Mentor</Typography>
        </Box>
        <UserDropDown />
      </Toolbar>
    </AppBar>
  );
}
