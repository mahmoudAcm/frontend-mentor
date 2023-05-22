import { ReactNode, useState } from 'react';
import { FormHelperText, FormLabel, Link, Typography } from '@mui/material';
import Head from 'next/head';
import { LoadingButton } from '@mui/lab';
import NextLink from 'next/link';
import AuthLayout from '@/src/components/Auth/AuthLayout';
import { AuthPaper, StyledFormControl, StyledInput } from '@/src/components/Auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import useAuthContext from '@/src/hooks/useAuthContext';
import { Credentials } from '@/src/types';

const schema = yup.object().shape({
  email: yup.string().email('It is not a valid email').required("Can't be blank"),
  password: yup.string().required("Can't be blank")
});

function SignIn() {
  const router = useRouter();
  const [isSubmitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  });
  const { signin, logout } = useAuthContext();

  const onSubmit = async (data: Credentials) => {
    if (!router.isReady) return;
    const email = data.email;
    const password = data.password;
    try {
      setSubmitting(true);
      await signin({ email, password });
    } catch (error) {
      await logout();
      setError('password', {
        message: 'wrong credentials'
      });
      setError('email', {
        message: 'wrong credentials'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Head>
        <title>Frontend Mentor | Sign In</title>
      </Head>
      <AuthPaper sx={{ width: `min(100%, 320px)` }}>
        <StyledFormControl fullWidth aria-label='Email' error={Boolean(errors.email?.message)}>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <StyledInput
            placeholder='example@gmail.com'
            id='email'
            {...register('email')}
            autoComplete='off'
            autoCapitalize='off'
          />
          <FormHelperText>{errors.email?.message}</FormHelperText>
        </StyledFormControl>
        <StyledFormControl fullWidth aria-label='Passowrd' error={Boolean(errors.password?.message)}>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <StyledInput
            placeholder='***********'
            id='password'
            type='password'
            {...register('password')}
            autoComplete='off'
            autoCapitalize='off'
          />
          <FormHelperText>{errors.password?.message}</FormHelperText>
        </StyledFormControl>
        <LoadingButton
          loading={isSubmitting}
          loadingPosition='start'
          variant='contained'
          startIcon={<></>}
          fullWidth
          sx={{ textTransform: 'capitalize' }}
          type='submit'
        >
          <span>Sign in</span>
        </LoadingButton>
        <Typography fontSize='0.875rem' fontWeight={400} align='center'>
          Don’t have account?{' '}
          <Link href='/signup' component={NextLink}>
            Create new account
          </Link>
        </Typography>
      </AuthPaper>
    </form>
  );
}

SignIn.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;

SignIn.guestGuard = true;

export default SignIn;
