import { alpha, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import UserDropDown from '@/src/components/Header/UserDropDown';

export const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.light,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}));

function BackButton() {
  const router = useRouter();
  const back = (router.query.back as string) ?? '';

  if (!back) return <></>;

  return (
    <Button
      startIcon={<ArrowBackIcon />}
      sx={{
        marginRight: 'auto',
        color: 'white',
        '&:hover': {
          background: theme => alpha(theme.palette.primary.dark, 0.3)
        }
      }}
      disabled={!back}
      onClick={() => {
        if (back) router.back();
      }}
    >
      Back
    </Button>
  );
}

export default function Header() {
  return (
    <AppBar position='sticky' elevation={4}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <BackButton />
        <UserDropDown />
      </Toolbar>
    </AppBar>
  );
}
