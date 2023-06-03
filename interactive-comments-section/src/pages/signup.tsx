import { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import AuthLayout from '@/src/components/Auth/AuthLayout';
import { AuthPaper, StyledFormControl, StyledInput, UploadButton } from '@/src/components/Auth';
import { Alert, Avatar, FormHelperText, FormLabel, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoadingButton } from '@mui/lab';
import api from '@/src/axios';
import { AxiosError } from 'axios';

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Can't be blank")
    .matches(
      /^[a-z][a-z\d-_]{7,20}$/gi,
      'It should start with a letter and consist of 7 to 20 characters, which can be letters, digits, hyphens, or underscores'
    ),
  email: yup.string().email('It is not a valid email').required("Can't be blank"),
  password: yup.string().required("Can't be blank"),
  image: yup
    .mixed()
    .test('fileSize', 'File size is too large it should be less than 5MB', function (value) {
      const files = value as File[];
      if (files && files.length === 0) return true;
      return Boolean(files && files.length && files[0].size <= 5000000); // 5MB
    })
    .test('fileType', 'Invalid file type', function (value) {
      const files = value as File[];
      if (files && files.length === 0) return true;
      return Boolean(files && files.length && ['image/jpeg', 'image/png'].includes(files[0].type));
    })
    .test('fileArray', 'Please select an avatar image', function (value) {
      const files = value as File[];
      return Boolean(files && files.length > 0);
    })
});

function Signup() {
  const [userCreated, setUserCreated] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      image: undefined,
      password: ''
    },
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  });
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const files = watch('image');
  useEffect(() => {
    if (!files) return;

    const file = files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [files]);

  const onSubmit = async (data: { username: string; email: string; image: undefined; password: string }) => {
    try {
      setSubmitting(true);
      await api.post('/auth/signup', { ...data, image });
      setUserCreated(true);
      setError('');
      reset();
      setImage('');
    } catch (error) {
      if (error instanceof AxiosError) {
        return setError(error.response?.data.message);
      }

      if (error instanceof Error) {
        return setError(error.message);
      }

      setUserCreated(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Head>
        <title>Frontend Mentor | Sign Up</title>
      </Head>
      <AuthPaper sx={{ width: `min(100%, 310px)` }} elevation={0}>
        {userCreated ? <Alert color='success'>User has been created successfully you may now sign in</Alert> : <></>}
        {error ? <Alert color='error'>{error}</Alert> : <></>}
        {!image || errors.image?.message ? (
          <UploadButton id='image' error={errors.image?.message}>
            <StyledInput
              type='file'
              id='image'
              {...register('image')}
              autoComplete='off'
              autoCapitalize='off'
              sx={{ display: 'none' }}
            />
          </UploadButton>
        ) : (
          <Avatar alt='profile picture' src={image} sx={{ width: '100px', height: '100px', margin: 'auto' }} />
        )}
        <StyledFormControl fullWidth aria-label='Name' error={Boolean(errors.username?.message)}>
          <FormLabel htmlFor='username'>Name</FormLabel>
          <StyledInput
            placeholder='Jhon Smith'
            id='username'
            {...register('username')}
            autoComplete='off'
            autoCapitalize='off'
          />
          <FormHelperText>{errors.username?.message}</FormHelperText>
        </StyledFormControl>
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
          <span>Sign up</span>
        </LoadingButton>
        <Typography fontSize='0.875rem' fontWeight={400} align='center'>
          Do you have an account?{' '}
          <Link href='/signin' component={NextLink}>
            {' '}
            Sign In
          </Link>
        </Typography>
      </AuthPaper>
    </form>
  );
}

Signup.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;

Signup.guestGuard = true;

export default Signup;
