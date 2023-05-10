import { ReactNode, useState } from 'react';
import { FormLabel, Link, Typography } from '@mui/material';
import Head from 'next/head';
import { LoadingButton } from '@mui/lab';
import NextLink from 'next/link';
import AuthLayout from '@/src/components/AuthLayout';
import { AuthPaper, InvitationSent, StyledFormControl, StyledInput } from '@/src/components/Auth';

function SignIn() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [invitationSent, setInvitationSent] = useState(false);

  const paperWidth = invitationSent ? '380px' : '320px';

  return (
    <form>
      <Head>
        <title>Frontend Mentor | Sign In</title>
      </Head>
      <AuthPaper sx={{ width: `min(100%, ${paperWidth})` }}>
        {invitationSent ? (
          <InvitationSent />
        ) : (
          <>
            <StyledFormControl fullWidth aria-label='Email'>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <StyledInput placeholder='email' value='example@email.com' id='email' />
            </StyledFormControl>
            <LoadingButton
              loading={isSubmitting}
              loadingPosition='start'
              variant='contained'
              startIcon={<></>}
              fullWidth
              sx={{ textTransform: 'capitalize' }}
              onClick={() => {
                setSubmitting(true);
                setTimeout(() => {
                  setSubmitting(false);
                  setInvitationSent(true);
                }, 1600);
              }}
            >
              <span>Sign in</span>
            </LoadingButton>
            <Typography fontSize='0.875rem' fontWeight={400} align='center'>
              Don’t have account?{' '}
              <Link href='/signup' component={NextLink}>
                {' '}
                Create new account
              </Link>
            </Typography>
          </>
        )}
      </AuthPaper>
    </form>
  );
}

SignIn.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;

export default SignIn;
