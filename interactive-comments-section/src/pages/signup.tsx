import { ReactNode, useState } from 'react';
import Head from 'next/head';
import AuthLayout from '@/src/components/AuthLayout';
import { AuthPaper, InvitationSent } from '@/src/components/Auth';
import { Link, List, ListItemButton, ListItemText, styled, Typography } from '@mui/material';
import NextLink from 'next/link';
import Image from 'next/image';

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius + 'px',
  border: '1px solid var(--light-gray)',
  '&:hover': {
    color: theme.palette.primary.main
  }
}));

function Signup() {
  const [invitationSent, setInvitationSent] = useState(false);
  const paperWidth = invitationSent ? '380px' : '300px';

  return (
    <form>
      <Head>
        <title>Frontend Mentor | Sign Up</title>
      </Head>
      <AuthPaper sx={{ width: `min(100%, ${paperWidth})` }} elevation={0}>
        {invitationSent ? (
          <InvitationSent />
        ) : (
          <>
            <List component='div' sx={{ display: 'grid', gap: '20px', py: 0 }}>
              <StyledListItemButton disableRipple>
                <Image src='/images/icon-google.svg' alt='google icon' priority width='20' height='20' />
                <ListItemText sx={{ ml: 1.5 }}>Continue With Google</ListItemText>
              </StyledListItemButton>
              {/*<StyledListItemButton disableRipple>*/}
              {/*  <Image src='/images/icon-twitter.svg' alt='twitter icon' priority width='20' height='20' />*/}
              {/*  <ListItemText sx={{ ml: 1.5 }}>Continue With Twitter</ListItemText>*/}
              {/*</StyledListItemButton>*/}
              {/*<StyledListItemButton disableRipple>*/}
              {/*  <Image src='/images/icon-facebook.svg' alt='facebook icon' priority width='20' height='20' />*/}
              {/*  <ListItemText sx={{ ml: 1.5 }}>Continue With Facebook</ListItemText>*/}
              {/*</StyledListItemButton>*/}
            </List>
            <Typography fontSize='0.875rem' fontWeight={400} align='center'>
              Do you have an account?{' '}
              <Link href='/signin' component={NextLink}>
                {' '}
                Sign In
              </Link>
            </Typography>
          </>
        )}
      </AuthPaper>
    </form>
  );
}

Signup.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;

export default Signup;
