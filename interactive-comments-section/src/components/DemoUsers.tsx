import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Link,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';
import { LOCAL_STORAGE_KEYS } from '@/src/constants';
import { useRouter } from 'next/router';
import useAuthContext from '@/src/hooks/useAuthContext';
import { toast } from 'react-toastify';

const StyledCard = styled(Card)(({ theme }) => ({
  width: 'min(100%, 700px)',
  boxShadow: 'var(--shadow)',
  [theme.breakpoints.up('md')]: {
    marginLeft: 'auto',
    marginRight: 'auto',
    '& .MuiCardHeader-root': {
      paddingTop: '20px'
    }
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    minHeight: '100vh',
    paddingTop: 40
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiCardContent-root, & .MuiCardHeader-root': {
      paddingLeft: '16px',
      paddingRight: '16px'
    }
  }
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  border: `1px solid var(--light-gray)`,
  paddingTop: '18px',
  paddingBottom: '18px',
  transition: theme.transitions.create(['color', 'border-color'])
}));

const demoUsers = ['juliusomo', 'amyrobson', 'maxblagun', 'ramsesmiron'];

export default function DemoUsers() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const { signin } = useAuthContext();
  const signInTimeoutRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setUsername('juliusomo');
    }

    const demoUser = localStorage.getItem(LOCAL_STORAGE_KEYS.DEMO_USER);
    setUsername(demoUser ?? 'juliusomo');
  }, []);

  const handleSignIn = (user: string) => () => {
    const toastId = toast('signin...', {
      isLoading: true
    });
    setUsername(user);
    localStorage.setItem(LOCAL_STORAGE_KEYS.DEMO_USER, user);
    signInTimeoutRef.current = setTimeout(async () => {
      try {
        await signin({ email: user + '@gmail.com', password: user });
      } catch (error) {
        toast.update(toastId, {
          type: 'info',
          isLoading: false,
          autoClose: 3000,
          render: "You can't login in with demo users now try again later"
        });
      }
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (signInTimeoutRef.current !== null) clearTimeout(signInTimeoutRef.current);
    };
  }, []);

  return (
    <StyledCard>
      <CardHeader
        sx={{ px: '24px' }}
        title={
          <span style={{ display: 'flex', alignItems: 'center' }}>
            Demo Users
            <PeopleIcon
              sx={{
                ml: 1.5,
                color: 'gray'
              }}
            />
          </span>
        }
        subheader={
          <>
            Switch the default demo user or{' '}
            <Link sx={{ fontWeight: 500 }} href={'/signin?next=' + (router.query.next ?? '/app')} component={NextLink}>
              sign in with a live user
            </Link>
          </>
        }
        titleTypographyProps={{
          variant: 'h1',
          lineHeight: 1.5
        }}
        subheaderTypographyProps={{
          fontWeight: 400,
          mb: -1
        }}
      />
      <CardContent sx={{ px: '24px' }}>
        <List
          sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          component='div'
          role='group'
          aria-label='demo users list'
        >
          {demoUsers.map((user, idx) => (
            <StyledListItemButton
              aria-label={`switch to ${user} demo user`}
              key={idx}
              disableRipple={username === user}
              sx={{
                borderColor: username === user ? theme => theme.palette.primary.main : undefined
              }}
              aria-current={username === user ? 'true' : 'false'}
              onClick={handleSignIn(user)}
            >
              <ListItemAvatar>
                <Avatar src={`/images/avatars/image-${user}.png`} alt={`${user} profile picture`} />
              </ListItemAvatar>
              <ListItemText sx={{ color: username === user ? theme => theme.palette.primary.main : undefined }}>
                {user}
              </ListItemText>
              {username === user ? <VerifiedIcon color='primary' fontSize='small' /> : <></>}
            </StyledListItemButton>
          ))}
        </List>
      </CardContent>
    </StyledCard>
  );
}
