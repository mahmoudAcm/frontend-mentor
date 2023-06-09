import { ReactElement, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuthContext from '@/src/hooks/useAuthContext';

interface GuestGuardProps {
  children: ReactNode;
  fallback: ReactElement | null;
}

export default function GuestGuard(props: GuestGuardProps) {
  const router = useRouter();
  const { status } = useAuthContext();
  const { children, fallback } = props;

  useEffect(() => {
    if (status === 'authenticated') router.replace((router.query.next as string) ?? '/app').then();
  }, [router, status]);

  if (status !== 'unauthenticated') return fallback;

  return <>{children}</>;
}
