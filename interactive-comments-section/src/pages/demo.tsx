import { ReactNode } from 'react';
import AuthLayout from '@/src/components/AuthLayout';
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

export default Demo;
