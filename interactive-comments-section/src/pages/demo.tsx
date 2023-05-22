import { ReactNode } from 'react';
import AuthLayout from '@/src/components/Auth/AuthLayout';
import DemoUsers from '@/src/components/DemoUsers';
import Head from 'next/head';

function Demo() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Demo Users</title>
      </Head>
      <DemoUsers />
    </>
  );
}

Demo.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;

Demo.guestGuard = true;

export default Demo;
